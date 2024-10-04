'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import hostingDark from '@/public/images/home-5-img/hosting-hero-dark.png'
import hosting from '@/public/images/home-5-img/hosting-hero.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.section
      initial="initial"
      ref={ref}
      animate={controlAnimation}
      variants={fadeUpAnimation}
      className="hero max-mb:pb-[70px] relative -z-0 overflow-hidden bg-white pb-[280px] pt-[230px] dark:bg-dark-300 max-lg:pt-[160px]"
      id="scene">
      <div className="container">
        <div className=" relative z-[100] mb-[165px] grid grid-cols-12 items-center max-lg:gap-y-10">
          <div className="col-span-12 md:col-span-7 ">
            <p className="mb-8 font-medium uppercase max-lg:mb-4">BRING YOUR IDEAS TO LIFE</p>
            <h1 className="mb-12 max-md:mb-8">
              Fastest
              <span className="inline-block rounded-[88px] border-2 border-paragraph bg-[#D9D9D900] px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-[#F0F3EA]">
                Web Hosting
              </span>
              performance
            </h1>
            <p className="mb-12 max-w-[590px] max-md:mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem
              aperiam inventore.
            </p>
            <form>
              <div className="border-borderColour grid w-full max-w-[520px] grid-cols-12 items-center rounded-[60px] border bg-white pb-1 pe-1 pl-4 pt-1 transition-all duration-300 focus-within:border-primary dark:border-[#31332F] dark:bg-dark-200  dark:focus-within:border-primary sm:pl-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" placeholder:text-light text-light col-span-8 bg-transparent leading-[1.75] text-[#A1A49D] outline-none focus:outline-none dark:placeholder:text-[#A1A49D]  xs:col-span-8"
                />
                <button className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4 ">Get Started</button>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-5 ">
            <div className="relative w-full">
              <Image
                src={hosting}
                alt="hero Image"
                className="inline-block dark:hidden"
                placeholder="blur"
                quality={70}
              />
              <Image
                src={hostingDark}
                alt="hero Image"
                className="hidden dark:inline-block"
                placeholder="blur"
                quality={70}
              />
            </div>
          </div>
        </div>

        <div className=" relative z-20">
          <div className="absolute left-1/2 top-[-500px] -z-10 -translate-x-1/2 max-md:top-[400px]">
            <svg width="1668" height="1022" viewBox="0 0 1668 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_0_1)">
                <ellipse
                  cx="834"
                  cy="511"
                  rx="544"
                  ry="221"
                  fill=""
                  fillOpacity="0.3"
                  className="fill-primary-200"></ellipse>
              </g>
              <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M286 378H360V452H286V453H360V528H286V529H360V603H286V604H360H361H435H436H511H512H586H587H662H663H737H738H813H814H888H889H963H964H1039H1040H1114H1115H1190H1191H1265H1266H1340H1341H1383V603H1341V529H1383V528H1341V453H1383V452H1341V378H1383V377H286V378ZM1340 378H1266V452H1340V378ZM1340 453H1266V528H1340V453ZM1340 529H1266V603H1340V529ZM1265 529V603H1191V529H1265ZM1265 453V528H1191V453H1265ZM1265 378V452H1191V378H1265ZM1190 378H1115V452H1190V378ZM1190 453H1115V528H1190V453ZM1190 529H1115V603H1190V529ZM963 603H889V529H963V603ZM888 603V529H814V603H888ZM963 528H889V453H963V528ZM888 528V453H814V528H888ZM963 452H889V378H963V452ZM814 378H888V452H814V378ZM587 603H662V529H587V603ZM587 528H662V453H587V528ZM586 453V528H512V453H586ZM587 452H662V378H587V452ZM586 378H512V452H586V378ZM586 529V603H512V529H586ZM1114 603H1040V529H1114V603ZM1039 603V529H964V603H1039ZM1114 528H1040V453H1114V528ZM1039 528V453H964V528H1039ZM1114 452H1040V378H1114V452ZM964 378H1039V452H964V378ZM738 603H813V529H738V603ZM738 528H813V453H738V528ZM737 453V528H663V453H737ZM738 452H813V378H738V452ZM737 378H663V452H737V378ZM737 529V603H663V529H737ZM511 603H436V529H511V603ZM435 603V529H361V603H435ZM511 528H436V453H511V528ZM435 528V453H361V528H435ZM511 452H436V378H511V452ZM361 378H435V452H361V378Z"
                fill="url(#paint0_radial_0_1)"></path>
              <defs>
                <filter
                  id="filter0_f_0_1"
                  x="0"
                  y="0"
                  width="1668"
                  height="1022"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="145" result="effect1_foregroundBlur_0_1"></feGaussianBlur>
                </filter>
                <radialGradient
                  id="paint0_radial_0_1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(834.5 490.5) rotate(90) scale(113.5 548.5)">
                  <stop stopColor="#0D0D0D"></stop>
                  <stop offset="1" stopColor="" stopOpacity="0" className="stop-color dark:stop-color-dark"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="dark:border-borderColour-dark grid h-full grid-cols-2 rounded border border-dashed border-gray-100 border-opacity-10 p-10 max-lg:p-5 max-md:grid-cols-1">
              <div className="max-md:mb-8">
                <h2>
                  Find Your Perfect Domain Name <br />
                  Your Business
                </h2>
              </div>
              <div className="h-full">
                <form action="">
                  <div className="flex gap-8 max-lg:flex-col">
                    <div className="w-full">
                      <input
                        type="text"
                        name="first-name"
                        id="username"
                        placeholder="Name"
                        className="dark:border-borderColour-dark mb-2.5 block h-[50px] w-full rounded-[48px] border border-gray-300 border-opacity-10  bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light  focus:border-primary  dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                      <ul className="mx-5 flex items-center justify-between">
                        <li>.info</li>
                        <li>.com</li>
                        <li>.biz</li>
                        <li>.org</li>
                        <li>.io</li>
                      </ul>
                    </div>

                    <button className="btn h-[50px] shrink-0">Search Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
