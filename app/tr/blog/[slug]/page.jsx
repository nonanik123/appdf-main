import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'
import Image from 'next/image'
import connectToDatabase from '@/utils/mongodb'
import { ObjectId } from 'mongodb' // Ensure this is correct

// Function to fetch blog by ID
const getBlogById = async (id) => {
  const { db } = await connectToDatabase()
  try {
    const blog = await db.collection('blogs').findOne({ _id: new ObjectId(id) }) // Ensure id is passed correctly
    return blog
  } catch (error) {
    console.error('Error fetching blog by ID:', error)
    return null
  }
}

const BlogDetails = async ({ params }) => {
  const { slug } = params // Ensure you're using the correct parameter
  console.log('Blog ID:', slug) // Check if the slug is being printed correctly

  const blog = await getBlogById(slug) // Fetch the blog data

  console.log('Fetched Blog:', blog) // Should now fetch the blog correctly

  if (!blog) {
    return <p>Blog not found.</p> // Handle case when blog doesn't exist
  }

  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG Details" title="Recent blogs created <br/> by aplio" />
        <article className="relative pb-150">
          <div className="container relative">
            <div className="mb-16 overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <Image src={blog.image} alt="about images" className="w-full rounded" width={1000} height={550} />
            </div>
            <div className="blog-details">
              <h2>{blog.title}</h2>
              <div className="mb-12 flex items-center gap-x-2 ">
                <p>{blog.author}</p>
                <span>•</span>
                <p>{blog.date}</p>
              </div>
            </div>
            <div className="blog-details-body">
              <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: blog.description }} />{' '}
            </div>
          </div>
        </article>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default BlogDetails
