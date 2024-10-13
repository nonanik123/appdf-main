'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/registry/new-york/ui/badge'
import { Checkbox } from '@/registry/new-york/ui/checkbox'

import { Blog } from '../../data/table/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Blog>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() ? 'indeterminate' : false}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => <div className="w-[200px] truncate">{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="w-[300px] truncate">{row.getValue('description')}</div>,
  },
    {
    accessorKey: 'tags',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tags" />,
    cell: ({ row }) => {
      const tags = row.getValue('tags') as any;
      return (
        <div className="flex space-x-2">
          {tags.map((tag: string) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      );
    },
  },
    {
    accessorKey: 'categories',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Categories" />,
    cell: ({ row }) => {
      const categories = row.getValue('categories') as any;
      return (
        <div className="flex space-x-2">
          {categories.map((category: string) => (
            <Badge key={category} variant="outline">{category}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'language',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Language" />,
    cell: ({ row }) => <div className="w-[100px]">{row.getValue('language')}</div>,
  },
  {
    id: 'actions',
    cell: () => <DataTableRowActions />,  },
]