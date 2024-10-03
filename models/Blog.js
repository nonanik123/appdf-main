// models/Blog.js
import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  language: { type: String, enum: ['en', 'tr'], required: true },
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
