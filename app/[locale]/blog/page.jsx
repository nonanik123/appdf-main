'use client'
import { useEffect, useState } from 'react'
import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:3000/api/blogs")
    const data = await res.json()
    setBlogs(data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG GRID" title="Recent blogs created <br/> by aplio" />
        <FeatureBlog featureBlog={blogs} />
        <RecentNews blogItemData={blogs} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Blog