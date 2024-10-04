'use client'
import Image from 'next/image'
import Link from 'next/link'

// BlogItems Component
const BlogItems = ({ blogData }) => {
  if (!blogData) {
    return null
  }

  return (
    <article className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
      <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
        <Image src={blogData.image} alt="Blog image" className="mb-6 w-full rounded-md" width={389} height={189} />
        {/* Use blogData._id for the link href */}
        <Link href={`/tr/blog/${blogData._id.toString()}`} className="block">
          <h3 className="mb-3 font-semibold leading-[1.33]">{blogData.title}</h3>
        </Link>
        <p style={{ whiteSpace: 'pre-wrap' }}> {blogData.description.slice(0, 70)}...</p>
      </div>
    </article>
  )
}

export default BlogItems
