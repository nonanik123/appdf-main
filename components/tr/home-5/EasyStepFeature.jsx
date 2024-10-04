'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import hostingStepDark from '@/public/images/home-5-img/hosting-steps-dark.png'
import hostingStep from '@/public/images/home-5-img/hosting-steps.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const easyStepPlan = [
  {
    id: 1,
    title: 'Choose Domain',
    description:
      ' Choose a domain name that reflects your website&apos;s purpose, content, or the nature of your business.',
  },
  {
    id: 2,
    title: 'Login/Register',
    description:
      ' Take the first step towards creating your website and reaching a wider audience by registering today.',
  },
  {
    id: 3,
    title: 'Make Payment',
    description:
      ' We offer a variety of secure payment methods to make your payment process convenient and hassle-free.',
  },
]

const EasyStepFeature = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <section className="relative overflow-hidden ">
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Easy Steps</p>
          <h2>
            What&apos;s the procedure for <br />
            its operation?
          </h2>
        </div>

        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="[&amp;>*:not(:last-child)]:mb-8 max-md:order-1">
            {easyStepPlan?.map((plan, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 "
                key={plan.id}>
                <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-8 max-md:p-4">
                  <div className="flex gap-10 max-lg:gap-5">
                    <div className="after:border-borderColour-dark relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary after:absolute after:left-1/2 after:top-1/2 after:size-[30px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-dashed">
                      <p className="font-jakarta_sans font-bold text-paragraph dark:text-paragraph">{plan.id}</p>
                    </div>
                    <div>
                      <h3 className="mb-2.5">{plan.title}</h3>
                      <p>{plan.description}</p>
                    </div>
                  </div>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>
          <motion.div
            className="relative flex aspect-square items-center justify-end max-md:justify-center"
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}
            ref={ref}>
            <Image
              src={hostingStep}
              alt="company image"
              className="aos-init aos-animate dark:hidden"
              placeholder="blur"
              quality={70}
            />
            <Image
              src={hostingStepDark}
              alt="company image"
              className="aos-init aos-animate hidden dark:inline-block"
              placeholder="blur"
              quality={70}
            />
            <div className="absolute  left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 after:absolute after:left-1/2 after:top-1/2 after:h-[465px] after:w-[465px]  after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary-200/30 after:blur-[60px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EasyStepFeature
