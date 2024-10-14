'use client'
import { useEffect, useState } from 'react'
import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'

const Blog = ({ params: { locale } }) => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:3000/api/blogs")
    const data = await res.json()
    setBlogs(data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  console.log("123",blogs)

  return (
    <>
      <PrimaryNavbar locale={locale} />
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