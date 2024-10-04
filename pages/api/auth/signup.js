// app/api/auth/signup.js

import connectToDatabase from '@/utils/mongodb' // Adjust the path based on your project structure
import bcrypt from 'bcrypt' // Make sure to install bcrypt for hashing passwords

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    try {
      const { db } = await connectToDatabase()

      // Check if the user already exists
      const existingUser = await db.collection('users').findOne({ email })
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists.' })
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create a new user
      const newUser = { name, email, password: hashedPassword }
      await db.collection('users').insertOne(newUser)

      return res.status(201).json({ message: 'User created successfully.' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Signup failed. Please try again.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
