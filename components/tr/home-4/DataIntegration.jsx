'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import analyticsDark2 from '@/public/images/integration/analytics-hero-dark-2.png'
import analyticsDark3 from '@/public/images/integration/analytics-hero-dark-3.png'
import analyticsDark from '@/public/images/integration/analytics-hero-dark.png'
import analyticsLight2 from '@/public/images/integration/analytics-hero-light-2.png'
import analyticsLight3 from '@/public/images/integration/analytics-hero-light-3.png'
import analyticsLight from '@/public/images/integration/analytics-hero-light.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const DataIntegration = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  const ref3 = useRef(null)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <section className="container mx-auto my-10 flex items-center justify-center gap-5 dark:bg-dark-300 lg:my-0">
      <motion.div initial="initial" ref={ref} animate={controlAnimation} variants={fadeUpAnimation}>
        <Image
          src={analyticsLight}
          alt="Analytics-hero-light"
          className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
        />
        <Image
          src={analyticsDark}
          alt="Analytics-hero-light"
          className="hidden h-auto w-auto  rounded-medium dark:inline-block"
        />
      </motion.div>

      <div className="flex flex-col gap-y-5">
        <motion.figure initial="initial" ref={ref2} animate={controlAnimation2} variants={fadeUpAnimation}>
          <Image
            src={analyticsLight2}
            alt="Analytics-hero-light2"
            className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
          />
          <Image
            src={analyticsDark2}
            alt="Analytics-hero-dark2"
            className="hidden h-auto w-auto  rounded-medium dark:inline-block"
          />
        </motion.figure>
        <motion.figure initial="initial" ref={ref3} animate={controlAnimation3} variants={fadeUpAnimation}>
          <Image
            src={analyticsLight3}
            alt="Analytics-hero-light3"
            className="inline-block h-auto w-auto rounded-medium shadow-nav dark:hidden"
          />
          <Image
            src={analyticsDark3}
            alt="Analytics-hero-dark3"
            className="hidden h-auto w-auto  rounded-medium dark:inline-block"
          />
        </motion.figure>
      </div>
    </section>
  )
}

export default DataIntegration
