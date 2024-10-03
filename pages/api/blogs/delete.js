
import connectToDatabase from '@/utils/mongodb'
import Blog from '@/models/Blog'
import mongoose from 'mongoose'

await connectToDatabase()

export default async function handler(req, res) {
  console.log(`Received ${req.method} request`)
  if (req.method === 'DELETE') {
    const { id } = req.body

    try {
      console.log(`Attempting to delete blog with ID: ${id}`)

      // Validate ObjectId format
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid blog ID' })
      }

      // Perform the deletion using deleteOne
      const result = await Blog.deleteOne({ _id: id })

      // Check if a blog was actually deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Blog not found' })
      }

      res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (error) {
      console.error('Error deleting blog:', error)
      res.status(500).json({ message: 'Error deleting blog', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
