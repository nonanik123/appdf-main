// /api/blogs/add.js
import connectToDatabase from '@/utils/mongodb'
import Blog from '@/models/Blog'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase()
      const newBlog = new Blog(req.body)
      await newBlog.save()
      res.status(201).json({ message: 'Blog added successfully' })
    } catch (error) {
      console.error('Error adding blog:', error)
      res.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
  }
}
