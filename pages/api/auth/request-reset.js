// /api/auth/request-reset.js
import connectToDatabase from '@/utils/mongodb'
import User from '@/models/admin'
import crypto from 'crypto'
import nodemailer from 'nodemailer' // For sending emails

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  try {
    await connectToDatabase()

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    // Generate a password reset token
    const token = crypto.randomBytes(32).toString('hex')

    // Send email with reset link (you'll need to create a frontend route to handle the token)
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`
    await transporter.sendMail({
      to: email,
      subject: 'Password Reset Request',
      html: `<p>You requested a password reset. Click the link below to reset your password:</p>
             <a href="${resetLink}">Reset Password</a>`,
    })

    // Optionally, you can store the token in the database with an expiration time
    user.resetToken = token // Add this field to your User model if needed
    await user.save()

    return res.status(200).json({ message: 'Reset link sent to your email.' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' })
  }
}
