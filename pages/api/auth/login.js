// app/api/auth/login.js

import connectToDatabase from '@/utils/mongodb' // Adjust the path based on your project structure
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    try {
      const { db } = await connectToDatabase()

      // Find the user by email
      const user = await db.collection('users').findOne({ email })
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' })
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' })
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
      console.log('Generated Token:', token) // Log the generated token

      res.setHeader('Set-Cookie', `token=${token}; Max-Age=3600; Path=/; HttpOnly; SameSite=Strict`)

      // Log the headers
      console.log('Response Headers:', res.getHeaders())

      // Return a success response
      return res.status(200).json({ message: 'Login successful' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Login failed. Please try again.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
