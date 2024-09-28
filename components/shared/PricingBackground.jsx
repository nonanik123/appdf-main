'use client'
const PricingBackground = () => {
  return (
    <>
      <div className="absolute left-1/2 top-150 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden  max-md:flex-col">
        <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
        <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
      </div>
      <div className="absolute left-1/2 top-25 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/price-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
    </>
  )
}

export default PricingBackground
