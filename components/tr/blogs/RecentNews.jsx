'use client'
import { useState } from 'react'
import Pagination from '../shared/Pagination'
import BlogItems from './BlogItems'

const RecentNews = ({ blogItemData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPage = Math.ceil(blogItemData.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return blogItemData.slice(startIndex, endIndex)
  }

  const currentPageData = paginateData()

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  }

  // Return early if there's no blogItemData
  if (!blogItemData || !Array.isArray(blogItemData) || blogItemData.length === 0) {
    return <p>No recent news available.</p>
  }

  return (
    <section className="relative py-150 max-md:py-20">
      <div className="container relative mb-16">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Tips and Tricks</p>
          <h2>Our recent news & insights</h2>
        </div>
        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currentPageData.map((blog) => {
              // Check if blog.title is defined
              if (!blog.title) {
                return null // Skip this blog if title is undefined
              }
              return <BlogItems key={blog._id.toString()} blogData={blog} />
            })}
          </div>
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  )
}

export default RecentNews
