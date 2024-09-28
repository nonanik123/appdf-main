'use client'
import { fadeUpAnimation } from '@/data/animation'
import { ServiceData } from '@/data/data'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const ServiceBoxes = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.div
      className="grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      {ServiceData?.map((items) => (
        <div
          className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
          key={items.id}>
          <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
            <Image
              src={items.iconLight}
              alt="service logo"
              className="mb-6 inline-block dark:hidden"
              width={40}
              height={40}
            />
            <Image
              src={items.iconDark}
              alt="service logo"
              className="mb-6 hidden dark:inline-block"
              width={40}
              height={40}
            />
            <Link href={`/services/${items.slug}`} className="block">
              <h3 className="mb-2.5">{items.title}</h3>
            </Link>
            <p className="mb-6">{items.excerpt}</p>
            <Link href={`/services/${items.slug}`} className="btn-outline btn-sm">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default ServiceBoxes
