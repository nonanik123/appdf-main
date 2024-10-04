'use client'
import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import solutionImage1Dark from '@/public/images/solution/solution-shape1-dark.png'
import solutionImage1 from '@/public/images/solution/solution-shape1.png'
import solutionImage2Dark from '@/public/images/solution/solution-shape2-dark.png'
import solutionImage2 from '@/public/images/solution/solution-shape2.png'
import solutionImage3Dark from '@/public/images/solution/solution-shape3-dark.png'
import solution3Image from '@/public/images/solution/solution-shape3.png'

const SolutionAnimation = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <>
      <motion.div
        ref={ref1}
        initial="initial"
        animate={controlAnimation1}
        variants={fadeFromLeftAnimation}
        className="absolute -top-[130px] bottom-auto left-10 right-auto h-[150px] w-[250px] lg:-top-[185px] lg:left-15 lg:h-[180px] lg:w-[280px] xl:h-[230px] xl:w-[320px]">
        <Image src={solutionImage1} alt="vision image" className="w-full  dark:hidden" />
        <Image src={solutionImage1Dark} alt="vision image" className="hidden w-full dark:inline-block" />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="initial"
        animate={controlAnimation2}
        variants={fadeFromRightAnimation}
        className="absolute bottom-auto left-auto right-12 top-12 h-[190px] w-[280px] lg:right-20 lg:h-[230px] lg:w-[320px] xl:h-[280px] xl:w-[368px]">
        <Image src={solutionImage2} alt="vision image" className="w-full  dark:hidden" />
        <Image src={solutionImage2Dark} alt="vision image" className="hidden w-full dark:inline-block" />
      </motion.div>
      <motion.div
        ref={ref3}
        initial="initial"
        animate={controlAnimation3}
        variants={fadeUpAnimation}
        className="absolute -bottom-[70px] left-[175px] right-auto top-auto aspect-video w-[150px] lg:-bottom-[86px] lg:left-[200px] lg:w-[170px]">
        <Image src={solution3Image} alt="vision image" className="w-full dark:hidden" />
        <Image src={solutionImage3Dark} alt="vision image" className="hidden w-full dark:inline-block" />
      </motion.div>
    </>
  )
}

export default SolutionAnimation
