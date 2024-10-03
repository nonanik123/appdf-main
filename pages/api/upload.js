import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import { IncomingForm } from 'formidable' // Updated import

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Disable body parsing, as we are using formidable for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm() // Use IncomingForm here

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing the file:', err)
        return res.status(500).json({ error: 'File parsing failed' })
      }

      const file = files.file ? files.file[0] : null

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' })
      }

      try {
        // Upload the file to Cloudinary using the file path
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: 'blogs', // Optional folder name in Cloudinary
        })

        // Remove the file from the server (optional)
        fs.unlinkSync(file.filepath)

        // Send the Cloudinary URL back to the client
        return res.status(200).json({ url: result.secure_url })
      } catch (uploadErr) {
        console.error('Error uploading to Cloudinary:', uploadErr)
        return res.status(500).json({ error: 'Cloudinary upload failed' })
      }
    })
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}
