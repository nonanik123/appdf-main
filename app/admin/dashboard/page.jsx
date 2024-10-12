import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"

import { columns } from "../../../components/tables/columns"
import { DataTable } from "../../../components/tables/data-table"
import { taskSchema } from "../../../data/table/schema"

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/data/table/tasks.json")
  )

  const tasks = JSON.parse(data.toString())
  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bloglar !</h2>
            <p className="text-muted-foreground">
              Bloglarınızı buradan yönetebilirsiniz.
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
