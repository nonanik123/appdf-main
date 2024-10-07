import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'

export const metadata = {
  title: 'Blog',
}

const Blog = () => {
  const blogs = getMarkDownData('data/blogs')
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
