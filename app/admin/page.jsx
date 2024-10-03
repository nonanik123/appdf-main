'use client'

import { useState, useEffect } from 'react'
import BlogForm from '@/components/BlogForm/BlogForm.jsx'
import { FaEdit, FaTrashAlt, FaSync } from 'react-icons/fa'
import AdminNavbar from '@/components/navbar/AdminNavbar'
import EditBlogModal from '@/components/modal/EditBlogModal'

export default function Admin() {
  const [englishBlogs, setEnglishBlogs] = useState([])
  const [turkishBlogs, setTurkishBlogs] = useState([])
  const [editingBlog, setEditingBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAddBlogModal, setShowAddBlogModal] = useState(false)
  const [error, setError] = useState(null)

  // Fetch data
  const fetchBlogs = async () => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/data/blogData')
        if (!response.ok) throw new Error('Failed to fetch admin data')
        const result = await response.json()

        setEnglishBlogs(result.filter((blog) => blog.language === 'en'))
        setTurkishBlogs(result.filter((blog) => blog.language === 'tr'))
      } catch (error) {
        console.error('Error fetching admin data:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }
  // Fetch data at component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/data/blogData')
        if (!response.ok) throw new Error('Failed to fetch admin data')
        const result = await response.json()

        setEnglishBlogs(result.filter((blog) => blog.language === 'en'))
        setTurkishBlogs(result.filter((blog) => blog.language === 'tr'))
      } catch (error) {
        console.error('Error fetching admin data:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle editing a blog
  const handleEditBlog = (blog) => {
    setEditingBlog(blog)
  }

  // Handle saving a blog after editing
  const handleSaveBlog = (updatedBlog) => {
    if (updatedBlog.lang === 'en') {
      setEnglishBlogs((prevBlogs) => prevBlogs.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog)))
    } else if (updatedBlog.lang === 'tr') {
      setTurkishBlogs((prevBlogs) => prevBlogs.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog)))
    }
    setEditingBlog(null)
  }

  // Handle deleting a blog
  const handleDeleteBlog = async (id, language) => {
    console.log('Deleting blog with ID:', id) // Debugging

    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const res = await fetch('/api/blogs/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }), // Ensure this is not empty
        })

        console.log('Response from delete API:', res) // Log the response for debugging

        if (res.ok) {
          if (language === 'en') {
            setEnglishBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id))
          } else if (language === 'tr') {
            setTurkishBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id))
          }
          alert('Blog deleted successfully!')
        } else {
          const error = await res.json()
          console.error('Delete error:', error) // Log error details for debugging
          alert(`Error: ${error.message || 'Unknown error occurred'}`)
        }
      } catch (error) {
        console.error('Error deleting blog:', error) // Log network errors
      }
    }
  }

  // Handle adding a new blog
  const handleAddBlog = (newBlog) => {
    setEnglishBlogs((prevBlogs) => {
      if (newBlog.language === 'en') {
        return [...prevBlogs, newBlog]
      }
      return prevBlogs // Return unchanged for Turkish
    })

    setTurkishBlogs((prevBlogs) => {
      if (newBlog.language === 'tr') {
        return [...prevBlogs, newBlog]
      }
      return prevBlogs // Return unchanged for English
    })

    setShowAddBlogModal(false) // Close the Add Blog modal after adding the blog
  }

  // Refresh function
  const handleRefresh = () => {
    setLoading(true)
    fetchBlogs()
  }

  if (loading) return <p className="text-center text-3xl font-extrabold text-gray-600">Loading...</p>
  if (error) return <div className="text-center text-red-500">{error}</div> // Render error message

  return (
    <>
      <AdminNavbar hideTopBar={true} />
      <main>
        {error && <div className="text-center text-red-500">{error}</div>} {/* Display error message */}
        <div className="container mx-auto mb-10 mt-20 p-6 pb-28 pt-28">
          <div className="flex items-center justify-between">
            <h1 className="h1 mb-8">Admin Panel</h1>
            <div className="flex items-center">
              <button
                onClick={() => setShowAddBlogModal(true)}
                className="btn w-54 flex h-10 items-center justify-center rounded-md text-xl font-extrabold text-white">
                Add New Blog
              </button>
            </div>
          </div>

          {/* English Blogs */}
          <div className="relative mb-12 mt-28 overflow-x-auto rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="h2 mb-6">English Blogs</h2>
              <button
                onClick={handleRefresh}
                className="btn mr-4 flex h-10 items-center justify-center rounded-md text-xl font-extrabold text-white">
                <FaSync className="mr-2" />
                Refresh
              </button>
            </div>
            <table className="w-full rounded-xl text-left text-base text-gray-700 dark:text-gray-400 rtl:text-right">
              <thead className="border border-r-large border-gray-600 bg-gray-100 text-lg uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-2 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg text-gray-600">
                {englishBlogs.length > 0 ? (
                  englishBlogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="p-4 text-center ">
                        <img src={blog.image} alt={blog.title} className="h-20 w-20 min-w-20 rounded-md object-cover" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white ">{blog.title}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{blog.description}</td>
                      <td className="flex items-center justify-center px-2 py-12">
                        <button className="mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditBlog(blog)}>
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteBlog(blog._id, blog.language)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center text-lg text-gray-500">
                      No blogs available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Turkish Blogs */}
          <div className="relative mt-28 overflow-x-auto shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="h2 mb-6">Turkish Blogs</h2>
              <button
                onClick={handleRefresh}
                className="btn mr-4 flex h-10 items-center justify-center rounded-md text-xl font-extrabold text-white">
                <FaSync className="mr-2" />
                Refresh
              </button>
            </div>
            <table className="w-full rounded-3xl text-left text-base text-gray-700 dark:text-gray-400 rtl:text-right">
              <thead className="border border-r-large border-gray-600 bg-gray-100 text-lg uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-2 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg text-gray-600">
                {turkishBlogs.length > 0 ? (
                  turkishBlogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="p-4 text-center">
                        <img src={blog.image} alt={blog.title} className="h-20 w-20 min-w-20 rounded-md object-cover" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{blog.title}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{blog.description}</td>
                      <td className="flex items-center justify-center px-2 py-12">
                        <button className="mr-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditBlog(blog)}>
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteBlog(blog._id, blog.language)}>
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center text-lg text-gray-500">
                      No blogs available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showAddBlogModal && <BlogForm onAddBlog={handleAddBlog} onClose={() => setShowAddBlogModal(false)} />}
        {editingBlog && (
          <EditBlogModal blog={editingBlog} onClose={() => setEditingBlog(null)} onSaveBlog={handleSaveBlog} />
        )}
      </main>
    </>
  )
}
