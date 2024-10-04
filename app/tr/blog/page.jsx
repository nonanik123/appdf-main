import FeatureBlog from '@/components/tr/blogs/FeatureBlog'
import RecentNews from '@/components/tr/blogs/RecentNews'
import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'

export default async function Blog() {
  // Fetch blogs from the API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/fetch`, {
    next: { revalidate: 0 },
  })

  const blogs = await res.json()

  // Filter blogs for the 'tr' language
  const filteredBlogs = blogs.filter((blog) => blog.language === 'tr')

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
