import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getMarkDownData = (folder) => {
  const folderPath = path.join(process.cwd(), folder)
  const files = fs.readdirSync(folderPath)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folderPath, file)
    const fullContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fullContent)
    const slug = file.replace('.md', '')

    return {
      slug,
      data,
      content,
    }
  })

  return postsData
}

export default getMarkDownData