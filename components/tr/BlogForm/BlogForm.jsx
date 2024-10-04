import { useState } from 'react'

export default function BlogForm({ onAddBlog, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    language: 'en',
  })
  const [errors, setErrors] = useState({})
  const [imageFile, setImageFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = async () => {
    if (!imageFile) return null

    setIsUploading(true)

    const formData = new FormData()
    formData.append('file', imageFile)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      setIsUploading(false)
      return data.url // Cloudinary's image URL
    } catch (error) {
      console.error('Image upload failed:', error)
      setIsUploading(false)
      return null
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    onClose()

    // Validate the form fields
    const newErrors = {}
    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.description) newErrors.description = 'Description is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    let imageUrl = formData.image
    if (imageFile) {
      imageUrl = await handleImageUpload()
      if (!imageUrl) {
        setErrors({ image: 'Image upload failed' })
        return
      }
    }

    // Submit the blog data, including the image URL
    try {
      const res = await fetch('/api/blogs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, image: imageUrl }),
      })

      if (res.ok) {
        const newBlog = await res.json()
        onAddBlog(newBlog) // Notify the parent component of the new blog
        alert('Blog added successfully!')
        setFormData({ title: '', description: '', image: '', language: 'en' }) // Reset form fields
        onClose() // Close the modal
      } else {
        const error = await res.json()
        alert(`Error: ${error.message || 'Unknown error occurred'}`)
      }
    } catch (error) {
      console.error('Error adding blog:', error)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl rounded-lg bg-gray-800 p-6 text-white shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-3xl font-extrabold text-gray-300 hover:text-white">
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="h2 mb-4">Add New Blog</h2>

          {/* Title input */}
          <div className="mb-4">
            <label className="block text-xl font-bold">
              Title:
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className={`mb-10 mt-2 block w-full rounded-md border p-2 text-black shadow-sm ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring focus:ring-blue-500`}
              />
              {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            </label>
          </div>

          {/* Description input */}
          <div className="mb-4">
            <label className="block text-xl font-bold">
              Description:
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className={`mb-10 mt-2 block w-full rounded-md border p-2 text-black shadow-sm ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring focus:ring-blue-500`}
              />
              {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </label>
          </div>

          {/* Image upload */}
          <div className="mb-4">
            <label className="block text-xl font-bold">
              Image:
              <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="mb-10 mt-2 block w-full rounded-md border bg-gray-700 p-2 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
            </label>
          </div>

          {/* Show a loading message while image is uploading */}
          {isUploading && <p className="text-blue-500">Uploading image...</p>}

          {/* Language selection */}
          <div className="mb-4">
            <label className="block text-xl font-bold">
              Language:
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="mb-10 mt-2 block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500">
                <option value="en">English</option>
                <option value="tr">Turkish</option>
              </select>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn rounded-md py-2 font-semibold text-white transition duration-200"
            disabled={isUploading}>
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  )
}
