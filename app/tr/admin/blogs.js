import { useEffect, useState } from 'react'

const AdminBlogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  })
  const [message, setMessage] = useState('')
  const [blogs, setBlogs] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fetchBlogs = async () => {
    const res = await fetch('/api/data/blogData')
    const data = await res.json()
    setBlogs(data.blogs || [])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/blogs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Blog added successfully')
        setFormData({ title: '', description: '', image: '' })
        fetchBlogs()
      } else {
        setMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('Error submitting the form')
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit">Add Blog</button>
      </form>
      {message && <p>{message}</p>}

      <h2>Blog List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.description}</td>
              <td>
                <img src={blog.image} alt={blog.title} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminBlogs
