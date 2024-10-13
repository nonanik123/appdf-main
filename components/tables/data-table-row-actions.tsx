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

export function DataTableRowActions({ id }) {
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
    if (!confirm("Düzenlemek istediğinize emin misiniz?")) return;
    // Düzenleme işlemleri burada yapılacak
    setToastMessage("Blog başarıyla düzenlendi.");
    setToastOpen(true);
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
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">
            {loading ? "Deleting..." : "Delete"}
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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