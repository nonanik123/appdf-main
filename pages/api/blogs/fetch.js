import connectToDatabase from '@/utils/mongodb'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      const blogs = await db.collection('blogs').find({}).toArray()
      res.status(200).json(blogs)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      res.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
