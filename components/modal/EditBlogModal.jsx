import { useState, useEffect } from 'react'

function EditBlogModal({ blog, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  })

  const [imageFile, setImageFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        description: blog.description,
        image: blog.image,
      })
    }
  }, [blog])

  const handleImageUpload = async () => {
    if (!imageFile) return formData.image
    setIsUploading(true)
    const formDataImage = new FormData()
    formDataImage.append('file', imageFile)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataImage,
      })

      const data = await res.json()
      return data.url
    } catch (error) {
      console.error('Image upload failed:', error)
      setErrors({ image: 'Image upload failed' })
      return null
    } finally {
      setIsUploading(false)
    }
  }

  const handleSave = async () => {
    setErrors({})
    // Validate the form fields
    const newErrors = {}
    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.description) newErrors.description = 'Description is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const imageUrl = await handleImageUpload()
    if (imageFile && !imageUrl) {
      return
    }

    try {
      const res = await fetch('/api/blogs/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: blog._id,
          title: formData.title,
          description: formData.description,
          image: imageFile ? imageUrl : formData.image,
        }),
      })

      if (res.ok) {
        const updatedBlog = await res.json()
        onClose()
        onSave(updatedBlog) // Callback to update the state in the parent component
      } else {
        const error = await res.json()
        alert(`Error: ${error.message || 'Unknown error occurred'}`)
      }
    } catch (error) {
      console.error('Error updating blog:', error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-3/4 max-w-4xl rounded-3xl bg-gray-800 p-12 shadow-lg dark:text-gray-400">
        {/* Close button (cross icon) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl font-extrabold text-gray-300 hover:text-white">
          &times;
        </button>

        <h2 className="h2 mb-8 text-3xl font-extrabold text-gray-100">Edit Blog</h2>

        <label className="text-gray-1000 mb-8 block text-2xl font-bold">
          Title:
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-2 block w-full rounded-lg border p-4 text-xl font-semibold text-black"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </label>

        <label className="text-gray-1000 mb-8 block text-2xl font-bold">
          Description:
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-2 block w-full rounded-lg border p-4 text-xl font-semibold text-black"
          />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </label>

        <label className="text-gray-1000 mb-8 block text-2xl font-bold">
          Image:
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="mt-2 block w-full rounded-lg border p-4 text-xl font-semibold text-black"
          />
        </label>
        {isUploading && <p className="text-blue-500">Uploading image...</p>}
        {errors.image && <p className="text-red-500">{errors.image}</p>}

        <div className="mt-8 flex justify-end">
          <button onClick={handleSave} className="btn ml-4 rounded-lg px-6 py-3 text-lg text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditBlogModal
