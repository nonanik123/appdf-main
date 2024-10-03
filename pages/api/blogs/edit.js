// /api/blogs/edit.js
import connectToDatabase from '@/utils/mongodb'
import Blog from '@/models/Blog'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, title, description, image } = req.body
    await connectToDatabase()

    try {
      const updatedBlog = await Blog.findByIdAndUpdate(id, { title, description, image }, { new: true })
      res.status(200).json(updatedBlog)
    } catch (error) {
      res.status(500).json({ message: 'Error updating blog', error })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
