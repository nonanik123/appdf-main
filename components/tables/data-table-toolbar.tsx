"use client";

import * as React from "react";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import * as Dialog from "@radix-ui/react-dialog";
import * as Toast from "@radix-ui/react-toast";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Plus } from "lucide-react";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyCyo8WikeR0s6SgzxA4TBSq_pLJkU8hAfw",
  authDomain: "dialogfusionlanding.firebaseapp.com",
  projectId: "dialogfusionlanding",
  storageBucket: "dialogfusionlanding.appspot.com",
  messagingSenderId: "1043761051489",
  appId: "1:1043761051489:web:f34d0607c509e0184df720",
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Rich text editor'u dinamik olarak yükleyin
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  fetchBlogs: () => Promise<void>; // Yeni fetchBlogs fonksiyonu
}

export function DataTableToolbar<TData>({
  table,
  fetchBlogs,
}: DataTableToolbarProps<TData>) {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const isFiltered = table.getState().columnFilters.length > 0;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    let imageUrl = "";
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      imageUrl = await getDownloadURL(storageRef);
    }

    const blogData = {
      title,
      description,
      tags: tags.split(","),
      categories: categories.split(","),
      author: "dialogfusion",
      language: "tr",
      date: new Date(),
      featureImage: imageUrl,
    };

    await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    setOpen(false);
    setToastOpen(true);
    await fetchBlogs(); 
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Blogları ara..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Sıfırla
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button variant="default" className="h-8 text-white px-5">
            Blog Oluştur
            <Plus className="ml-2" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Blog Oluştur
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              Lütfen blog detaylarını girin.
            </Dialog.Description>
            <div className="mt-4 space-y-4">
              <Input
                placeholder="Başlık"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
              <Input
                placeholder="Kategoriler"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="w-full"
              />
              <Input
                placeholder="Etiketler (virgülle ayırın)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full"
              />
              <ReactQuill
                value={description}
                onChange={setDescription}
                className="w-full h-full"
                modules={modules}
                formats={formats}
              />
              <input type="file" onChange={handleImageChange} />
              {image && <p>Seçilen Resim: {image.name}</p>}
            </div>
            <div className="mt-4 flex justify-end">
              <Dialog.Close asChild>
                <Button variant="ghost">Vazgeç</Button>
              </Dialog.Close>
              <Button
                variant="default"
                className="ml-4 text-white px-5"
                onClick={handleSave}
              >
                Kaydet
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Toast.Provider>
        <Toast.Root
          className="bg-white border border-gray-200 p-4 rounded shadow-lg"
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <Toast.Title className="text-lg font-bold">Başarılı</Toast.Title>
          <Toast.Description className="mt-1 text-sm text-gray-500">
            Blog başarıyla eklendi.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
      </Toast.Provider>
    </div>
  );
}