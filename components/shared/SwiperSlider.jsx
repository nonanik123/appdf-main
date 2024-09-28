'use client'
import { TestimonialData } from '@/data/data'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RatingStars } from './Rating'

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      }}
      className="swiper !py-16 md:!px-6">
      {TestimonialData.slice(0, 5).map((testimonial) => (
        <SwiperSlide
          key={testimonial.id}
          className="swiper-slide rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
          <div className=" h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
            <Image
              src={testimonial.logoLight}
              alt="service logo"
              className="mb-6 inline-block dark:hidden"
              width={120}
              height={35}
            />
            <Image
              src={testimonial.logoDark}
              alt="service logo"
              className="mb-6 hidden dark:inline-block"
              width={110}
              height={35}
            />
            <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white">
              “Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not Latin
              though it looks like it, and it actually says nothing.”
            </blockquote>
            <div className="mb-7">
              <RatingStars
                rating={testimonial.rating}
                ratingColor={'text-paragraph dark:text-white'}
                ratingEmptyColor={'text-[#A7A7B4] dark:text-[#646463]'}
              />
            </div>

            <div className="flex items-center border-t border-dashed border-gray-100 pt-7 dark:border-borderColor-dark">
              <Image src={testimonial.author.image} alt="avatar" className="mr-4 rounded-full" width={56} height={56} />
              <div className="block">
                <h3 className="text-base font-semibold">Robert Frost</h3>
                <p className="font-jakarta_sans text-sm  font-medium text-paragraph-light dark:text-[#A1A49D]">
                  Lead Designer
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperSlider
