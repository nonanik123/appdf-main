// /api/auth/reset-password.js
import connectToDatabase from '@/utils/mongodb'
import User from '@/models/admin'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, newPassword } = req.body // Extract email and new password

  try {
    await connectToDatabase()

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashedPassword // Update the user's password
    await user.save()

    return res.status(200).json({ message: 'Password reset successfully.' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}
