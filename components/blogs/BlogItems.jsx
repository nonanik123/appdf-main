'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const BlogItems = ({ slug, blogData, content, column }) => {
  const featureImage = blogData.featureImage || '/images/default-image.png';

  return column ? (
    <article className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
      <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark  max-md:px-4">
        <div className="grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1">
          <div className="w-ful mb-6 h-full ">
            <Image
              src={featureImage}
              alt="service logo"
              className="aspect-square h-full w-full rounded-md object-cover object-center"
              width={350}
              height={350}
            />
          </div>
          <div>
            <Link href={`/tags/${blogData.tags}`} className="badge">
              {blogData.tags}
            </Link>
            <Link href={`/blog/${slug}`} className="block">
              <h3 className="mb-3 font-semibold leading-[1.33]">{blogData.title}</h3>
            </Link>
            <div className="mb-4 flex items-center gap-x-2 ">
              <p>{blogData.author}</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                  <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]" />
                </svg>
              </span>
              <p>{blogData.date}</p>
            </div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: 'h1',
                h2: 'h2',
                p: 'p',
                ol: 'ol',
                li: 'li',
                strong: 'strong',
                em: 'em',
                u: 'u'
              }}
            >
              {content.slice(0, 120)}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
      <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark max-md:p-4 ">
        <Image
          src={featureImage}
          alt="service logo"
          className="mb-6 w-full rounded-md"
          width={389}
          height={189}
        />
        <div>
          <Link href={`/tags/${blogData.tags}`} className="badge">
            {blogData.tags}
          </Link>
          <Link href={`/blog/${slug}`} className="block">
            <h3 className="mb-3 font-semibold leading-[1.33]">{blogData.title}</h3>
          </Link>
          <div className="mb-4 flex items-center gap-x-2 ">
            <p>{blogData.author}</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]" />
              </svg>
            </span>
            <p>{blogData.date}</p>
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: 'h1',
              h2: 'h2',
              p: 'p',
              ol: 'ol',
              li: 'li',
              strong: 'strong',
              em: 'em',
              u: 'u'
            }}
          >
            {content.slice(0, 70)}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}

export default BlogItems