import { columns } from "../../../components/tables/columns"
import { DataTable } from "../../../components/tables/data-table"
import { blogSchema } from "../../../data/table/schema"

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs")
  const blogs = await res.json()

  // Verileri kontrol et ve eksik alanları doldur
  const validatedBlogs = blogs.map((blog) => {
    return blogSchema.parse({
      id: blog._id?.toString() || "",
      title: blog.title || "",
      description: blog.description || "",
      tags: blog.tags || [],
      categories: blog.categories || [],
      author: blog.author || "",
      language: blog.language || "",
      date: blog.date || new Date().toISOString(),
      featureImage: blog.featureImage || "",
    })
  })

  console.log("Fetched blogs:", validatedBlogs)
  return validatedBlogs
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bloglar</h2>
            <p className="text-muted-foreground">
              Bloglarınızı buradan yönetebilirsiniz.
            </p>
          </div>
        </div>
        <DataTable data={blogs} columns={columns} />
      </div>
    </>
  )
}