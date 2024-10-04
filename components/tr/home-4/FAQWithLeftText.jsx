'use client'
import analyticsDarkFaq from '@/public/images/home-4-img/analytics-faq-dark.png'
import analyticsFaqShapeDark from '@/public/images/home-4-img/analytics-faq-shape-dark.png'
import analyticsFaqShape from '@/public/images/home-4-img/analytics-faq-shape.png'
import analyticsFaq from '@/public/images/home-4-img/analytics-faq.png'
import Image from 'next/image'
import { useRef } from 'react'

import { fadeFromRightAnimation3, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import CustomFAQ from './CustomFAQ'

export default function FAQWithLeftText() {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <div className="container relative z-10 pb-[150px] ">
      <div className="grid grid-cols-2 items-start gap-8 max-lg:grid-cols-1">
        <div className="relative flex items-center justify-end max-lg:mb-25 max-lg:justify-center md:mt-12">
          <motion.figure ref={ref} initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
            <Image
              src={analyticsFaq}
              alt="banking image"
              className=" max-w-[350px] dark:hidden sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px]"
              placeholder="blur"
            />
            <Image
              src={analyticsDarkFaq}
              alt="banking image"
              className="hidden max-w-[350px] dark:inline-block sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px] "
              placeholder="blur"
            />
          </motion.figure>

          <motion.div
            className=" absolute -bottom-20 -right-5 left-auto top-auto max-w-[250px] md:right-15 lg:-bottom-25 lg:-right-15 xl:-bottom-150 xl:-right-25 xl:max-w-[344px]"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeFromRightAnimation3}>
            <Image src={analyticsFaqShape} alt="banking image" className="dark:hidden" placeholder="blur" />
            <Image
              src={analyticsFaqShapeDark}
              alt="banking image"
              className="hidden dark:inline-block"
              placeholder="blur"
            />
          </motion.div>
        </div>

        <div className="lg:pl-15 xl:pl-25">
          <div>
            <p className="section-tagline">Faq’s</p>
            <h2 className="mb-8">
              Frequently Asked Question
              <br />
              From Clients
            </h2>
          </div>
          <CustomFAQ />
        </div>
      </div>
    </div>
  )
}
