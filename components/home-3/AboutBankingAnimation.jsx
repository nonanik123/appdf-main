'use client'
import { fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const AboutBankingAnimation = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)

  return (
    <div className="relative flex items-center justify-end max-md:justify-center">
      <motion.img
        src="/images/about/onlinePayment.png"
        alt="banking image"
        className="max-w-[250px] dark:hidden lg:max-w-[320px] xl:max-w-[420px]"
        ref={ref}
        initial="initial"
        animate={controlAnimation}
        variants={fadeUpAnimation}
      />
      <motion.img
        src="/images/about/onlinePayment-dark.png"
        alt="banking image"
        className="hidden max-w-[250px]  dark:inline-block lg:max-w-[320px] xl:max-w-[420px]"
        ref={ref}
        initial="initial"
        animate={controlAnimation}
        variants={fadeUpAnimation}
      />
      <div className="absolute bottom-8 left-0 right-auto top-auto max-w-[180px] md:max-w-[250px] xl:max-w-[344px] ">
        <motion.img
          src="/images/about/onlinePayment-shape.png"
          alt="banking image"
          className="dark:hidden"
          ref={ref2}
          initial="initial"
          animate={controlAnimation2}
          variants={fadeFromRightAnimation}
        />
        <motion.img
          src="/images/about/onlinePayment-shape-dark.png"
          alt="banking image"
          className="hidden dark:inline-block "
          ref={ref2}
          initial="initial"
          animate={controlAnimation2}
          variants={fadeFromRightAnimation}
        />
      </div>
    </div>
  )
}

export default AboutBankingAnimation
