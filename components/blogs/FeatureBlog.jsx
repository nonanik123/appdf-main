'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FeatureBlog = ({ featureBlog }) => {
  // Handle empty state
  if (!featureBlog || featureBlog.length === 0) {
    return <p className="text-center text-lg">No featured blogs available.</p>
  }

  return (
    <div className="relative">
      <div className="absolute -top-150 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative pb-150 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:content-[url('/images/blog/blog-seperator.svg')] dark:after:content-[url('/images/blog/blog-seperator-dark.svg')] max-lg:max-w-full max-md:pb-10 max-md:after:hidden">
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:max-w-full max-md:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper !pb-20 md:!px-6">
            {featureBlog.map((blog) => (
              <SwiperSlide key={blog._id}>
                {/* Use _id for dynamic linking */}
                <article className="swiper-slide rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark max-md:p-4">
                    <div className="grid w-3/4 grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                      <div className="relative h-full w-3/4 xl:min-h-[330px]">
                        {blog && (
                          <Image
                            src={blog.image} // Use the image property directly
                            alt={blog.title} // Use title for alt text
                            className="w-3/4 rounded-lg max-md:h-[350px] max-md:object-cover max-md:object-center"
                            fill={true}
                          />
                        )}
                      </div>

                      <div>
                        {/* Link to the blog page using _id */}
                        <Link href={`/blog/${blog._id}`} className="block">
                          <h3 className="mb-3 font-semibold leading-[1.33]">{blog.title}</h3>
                        </Link>
                        <p className="mb-4" style={{ whiteSpace: 'pre-wrap' }}>
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeatureBlog
