import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'

export default async function Blog() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  // Fetch blogs from the API
  const res = await fetch(`${baseUrl}/api/blogs/fetch`, {
    next: { revalidate: 0 },
  })
  const blogs = await res.json()

  // Filter blogs for the 'en' language
  const filteredBlogs = blogs.filter((blog) => blog.language === 'en')

  // Get only the first 2 blogs for FeatureBlog
  const featureBlogs = filteredBlogs.slice(0, 2)

  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG GRID" title="Recent blogs created <br/> by aplio" />
        <FeatureBlog featureBlog={featureBlogs} /> {/* Pass only the first 2 blogs */}
        <RecentNews blogItemData={filteredBlogs} /> {/* Pass all filtered blogs */}
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}
