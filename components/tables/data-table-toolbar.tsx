"use client"

import * as React from "react"
import { useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import * as Dialog from "@radix-ui/react-dialog"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"

// Rich text editor'u dinamik olarak yükleyin
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [title, setTitle] = useState("")
  const [categories, setCategories] = useState("")
  const [tags, setTags] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const isFiltered = table.getState().columnFilters.length > 0

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['code-block'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image',
    'code-block'
  ]

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
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline" className="h-8">
            Blog Oluştur
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
              <Button variant="default" className="ml-2">
                Kaydet
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}