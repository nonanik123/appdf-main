'use client'
import React, { useRef } from 'react'
import hostingCompany from '@/public/images/home-5-img/hosting-company.png'
import hostingCompanyDark from '@/public/images/home-5-img/hosting-company-dark.png'
import Image from 'next/image'
import CounterAnimation from '@/utils/CounterAnimation'
import { HomeFiveHeroBgSvg } from '@/data/svgImages'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/data/animation'

const HostingFeature = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <section className=" relative overflow-hidden pb-20 pt-150 max-md:pb-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="relative flex aspect-square items-center justify-end max-md:justify-center">
            <motion.figure ref={ref} initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
              <Image src={hostingCompany} alt="company image" className="aos-init aos-animate dark:hidden" />
            </motion.figure>
            <motion.figure ref={ref} initial="initial" animate={controlAnimation} variants={fadeUpAnimation}>
              <Image
                src={hostingCompanyDark}
                alt="company image"
                className="aos-init aos-animate hidden dark:inline-block"
              />
            </motion.figure>
            <div className="absolute  left-1/2 top-1/2 -z-10  inline-block -translate-x-1/2 -translate-y-1/2  after:absolute after:left-1/2 after:top-1/2  after:h-[400px] after:w-[400px] after:-translate-x-1/2  after:-translate-y-1/2 after:rounded-full after:bg-primary-200/30 after:blur-[60px] dark:hidden">
              <HomeFiveHeroBgSvg />
            </div>

            <div className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 after:absolute after:left-1/2 after:top-1/2 after:h-[465px] after:w-[465px] after:-translate-x-1/2  after:-translate-y-1/2 after:rounded-full after:bg-primary-200/30 after:blur-[60px] dark:inline-block"></div>
          </div>

          <div id="company_bar">
            <p className="section-tagline">COMPANY</p>

            <h2 className="mb-8 max-md:mb-4">Real solutions for real web Hosting</h2>
            <p className="mb-11 max-md:mb-6">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before &amp;
              After magazine.
            </p>
            <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
              <div className="flex items-center gap-8">
                <div className="relative size-[90px] shrink-0">
                  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM6.75 45C6.75 66.1249 23.8751 83.25 45 83.25C66.1249 83.25 83.25 66.1249 83.25 45C83.25 23.8751 66.1249 6.75 45 6.75C23.8751 6.75 6.75 23.8751 6.75 45Z"
                      fill=""
                      className="fill-[#E8F0D8] dark:fill-[#2F3524]"></path>
                    <path
                      d="M45 3.375C45 1.51104 46.5132 -0.0131664 48.3719 0.126498C54.3278 0.574028 60.1469 2.20382 65.4849 4.93297C71.8266 8.17527 77.3082 12.8766 81.4787 18.6504C85.6493 24.4241 88.3897 31.1054 89.4748 38.1447C90.5598 45.1841 89.9584 52.3804 87.72 59.142C85.4817 65.9037 81.6703 72.0374 76.5993 77.0388C71.5282 82.0403 65.3424 85.7666 58.5506 87.9113C51.7587 90.0561 44.5547 90.558 37.531 89.3758C31.6189 88.3808 25.9768 86.2164 20.9303 83.0217C19.3554 82.0247 19.0506 79.8987 20.1628 78.4029C21.275 76.9071 23.3823 76.6103 24.9702 77.5864C29.1494 80.1552 33.7932 81.9018 38.6513 82.7195C44.6215 83.7243 50.7449 83.2977 56.518 81.4746C62.2911 79.6516 67.549 76.4842 71.8594 72.233C76.1697 67.9818 79.4094 62.7681 81.312 57.0207C83.2147 51.2734 83.7258 45.1565 82.8036 39.173C81.8813 33.1896 79.5519 27.5105 76.0069 22.6028C72.4619 17.6951 67.8027 13.699 62.4122 10.943C58.0258 8.70038 53.2571 7.33108 48.3707 6.8988C46.514 6.73454 45 5.23896 45 3.375Z"
                      fill=""
                      className="fill-primary"></path>
                  </svg>
                  <h3 className="absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center">
                    <CounterAnimation number="40" />
                    <span className="companyBar"></span>%
                  </h3>
                </div>
                <h3 className="text-xl leading-6">
                  Customers <br />
                  are Web Pros
                </h3>
              </div>

              <div className="flex items-center gap-8">
                <div className="relative size-[90px] shrink-0">
                  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM6.75 45C6.75 66.1249 23.8751 83.25 45 83.25C66.1249 83.25 83.25 66.1249 83.25 45C83.25 23.8751 66.1249 6.75 45 6.75C23.8751 6.75 6.75 23.8751 6.75 45Z"
                      fill=""
                      className="fill-[#E8F0D8] dark:fill-[#2F3524]"></path>
                    <path
                      d="M45 3.375C45 1.51104 46.5132 -0.0131664 48.3719 0.126498C54.3278 0.574028 60.1469 2.20382 65.4849 4.93297C71.8266 8.17527 77.3082 12.8766 81.4787 18.6504C85.6493 24.4241 88.3897 31.1054 89.4748 38.1447C90.5598 45.1841 89.9584 52.3804 87.72 59.142C85.4817 65.9037 81.6703 72.0374 76.5993 77.0388C71.5282 82.0403 65.3424 85.7666 58.5506 87.9113C51.7587 90.0561 44.5547 90.558 37.531 89.3758C31.6189 88.3808 25.9768 86.2164 20.9303 83.0217C19.3554 82.0247 19.0506 79.8987 20.1628 78.4029C21.275 76.9071 23.3823 76.6103 24.9702 77.5864C29.1494 80.1552 33.7932 81.9018 38.6513 82.7195C44.6215 83.7243 50.7449 83.2977 56.518 81.4746C62.2911 79.6516 67.549 76.4842 71.8594 72.233C76.1697 67.9818 79.4094 62.7681 81.312 57.0207C83.2147 51.2734 83.7258 45.1565 82.8036 39.173C81.8813 33.1896 79.5519 27.5105 76.0069 22.6028C72.4619 17.6951 67.8027 13.699 62.4122 10.943C58.0258 8.70038 53.2571 7.33108 48.3707 6.8988C46.514 6.73454 45 5.23896 45 3.375Z"
                      fill=""
                      className="fill-primary"></path>
                  </svg>
                  <h3 className="absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center">
                    <CounterAnimation number="60" />
                    <span className="companyBar"></span>%
                  </h3>
                </div>
                <h3 className="text-xl leading-6">
                  Websites <br />
                  Currently Hosted
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostingFeature
