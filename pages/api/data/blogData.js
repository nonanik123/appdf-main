import connectToDatabase from '@/utils/mongodb'
import Blog from '@/models/Blog' // Adjust the import based on your model

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase() // Ensure you're correctly awaiting the connection

      // Fetch data from the AdminData model
      const data = await Blog.find({})

      res.status(200).json(data)
    } catch (error) {
      console.error('Error fetching data:', error)
      res.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
