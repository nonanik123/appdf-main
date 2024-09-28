'use client'
import useWhileInView from '@/hooks/useWhileInView'
import visionImage2Light from '@/public/images/vision/vision-image-1.png'
import visionImage3Light from '@/public/images/vision/vision-image-2.png'
import visionImage2Dark from '@/public/images/vision/vision-image-dark-1.png'
import visionImage3Dark from '@/public/images/vision/vision-image-dark-2.png'
import { default as visionImageOneDark, default as visionImageOneLight } from '@/public/images/vision/vision-image.png'
import { motion } from 'framer-motion'

import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import Image from 'next/image'
import { useRef } from 'react'

const VisionAnimation = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <div className="relative max-md:mt-150">
      <motion.div ref={ref1} variants={fadeFromRightAnimation} initial="initial" animate={controlAnimation1}>
        <Image src={visionImageOneLight} alt="vision image" className="w-[260px] dark:hidden xl:w-[310px]" />
      </motion.div>
      <motion.div variants={fadeUpAnimation} initial="initial" ref={ref2} animate={controlAnimation2}>
        <Image
          src={visionImageOneDark}
          alt="vision image"
          className="hidden w-[260px] dark:inline-block xl:w-[310px]"
        />
      </motion.div>
      <motion.div
        className="absolute -top-25 left-40 w-[200px] md:-top-12  md:w-[200px] xl:-top-[150px]  xl:left-[290px] xl:w-[310px]"
        initial="initial"
        ref={ref3}
        animate={controlAnimation3}
        variants={fadeFromLeftAnimation}>
        <Image src={visionImage2Light} alt="vision image shape" className="h-full w-full object-contain dark:hidden" />
        <Image src={visionImage2Dark} alt="vision image shape" className="hidden h-full w-full dark:inline-block" />
      </motion.div>
      <motion.div
        variants={fadeUpAnimation}
        initial="initial"
        ref={ref2}
        animate={controlAnimation2}
        className="absolute bottom-5 left-20 w-[280px] md:bottom-0 md:left-[100px] md:w-[200px] xl:bottom-8 xl:left-150 xl:w-[350px]">
        <Image src={visionImage3Light} alt="vision image shape" className="h-full w-full dark:hidden" />
        <Image
          src={visionImage3Dark}
          alt="vision image shape"
          className="left-0 top-0 hidden h-full w-full dark:inline-block"
        />
      </motion.div>
    </div>
  )
}

export default VisionAnimation
