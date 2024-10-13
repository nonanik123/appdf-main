import React from 'react';
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/registry/new-york/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu";
import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import * as Dialog from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";
import { Input } from "@/registry/new-york/ui/input";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export function DataTableRowActions({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleDelete = async () => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setToastMessage("Blog başarıyla silindi.");
        setToastOpen(true);
      } else {
        const errorData = await response.json();
        console.error("An error occurred while deleting the blog:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while deleting the blog", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setLoading(true);
    const updatedData: Partial<{
      title: string;
      categories: string;
      tags: string[];
      description: string;
      image: File | null;
    }> = {};
    if (title) updatedData.title = title;
    if (categories) updatedData.categories = categories;
    if (tags) updatedData.tags = tags.split(",");
    if (description) updatedData.description = description;
    if (image) updatedData.image = image;

    try {
      const response = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        setToastMessage("Blog başarıyla güncellendi.");
        setToastOpen(true);
        setDialogOpen(false);
      } else {
        const errorData = await response.json();
        console.error("An error occurred while updating the blog:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while updating the blog", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="cursor-pointer">
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">
            {loading ? "Deleting..." : "Delete"}
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setDialogOpen(false)} />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Blog Düzenle
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
            {toastMessage}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
      </Toast.Provider>
    </>
  );
}