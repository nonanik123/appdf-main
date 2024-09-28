import ServiceBoxes from './ServiceBoxes'

const Services = ({ sectionDetails = true }) => {
  return (
    <section className="relative bg-white pb-150 dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
      <div className="container">
        {sectionDetails && (
          <div className="mb-12">
            <p className="section-tagline max-lg:text-center">Our Services</p>
            <div className="block max-lg:text-center lg:flex">
              <h2 className=" max-lg:mb-5">
                The world&rsquo;s best companies <br />
                trust aplio.
              </h2>
              <p className="max-w-[520px] lg:ml-auto">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not
                Latin, though it looks like it
              </p>
            </div>
          </div>
        )}
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <ServiceBoxes />
        </div>
      </div>
    </section>
  )
}

export default Services
