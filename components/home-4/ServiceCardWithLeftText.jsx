import financeDarkSVG from '@/public/images/home-4-img/finance-dark.svg'
import financeSVG from '@/public/images/home-4-img/finance.svg'
import investmentDarkSVG from '@/public/images/home-4-img/investment-dark.svg'
import investmentSVG from '@/public/images/home-4-img/investment.svg'
import salesDarkSVG from '@/public/images/home-4-img/sales-dark.svg'
import salesSVG from '@/public/images/home-4-img/sales.svg'
import trackDarkSVG from '@/public/images/home-4-img/track-dark.svg'
import trackSVG from '@/public/images/home-4-img/track.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCardWithLeftText() {
  const servicesCard = [
    {
      id: 1,
      svg: investmentSVG,
      slug: 'finance-analyse',
      darkSvg: investmentDarkSVG,
      title: 'Real-Time Analytics',
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
      button: 'See More',
    },
    {
      id: 2,
      svg: financeSVG,
      slug: 'effeciency',
      darkSvg: financeDarkSVG,
      title: 'Risk Management',
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
      button: 'See More',
    },
    {
      id: 3,
      svg: salesSVG,
      slug: 'sales',
      darkSvg: salesDarkSVG,
      title: 'Sales Management',
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
      button: 'See More',
    },
    {
      id: 4,
      svg: trackSVG,
      slug: 'finance-analyse',
      darkSvg: trackDarkSVG,
      title: 'Track Conversions',
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it",
      button: 'See More',
    },
    // {
    //   id: 6,
    //   slug: 'fund',
    //   title: 'Fundraising Advice',
    //   excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    //   iconLight: '/images/services/fund.svg',
    //   iconDark: '/images/services/fund-dark.svg',
    //   featureImage: '/images/services/service-single1.png',
    //   videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    //   serviceDetails:
    //     'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    //   serviceExpectation:
    //     'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    //   serviceExpectationList: [
    //     {
    //       item: 'It’s scalable and secure',
    //     },
    //     {
    //       item: 'Artificial Intelligence Feature',
    //     },
    //     {
    //       item: 'Offline version available',
    //     },
    //   ],
    //   serviceQualifications:
    //     'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    //   serviceQualificationsList: [
    //     {
    //       item: 'It’s scalable and secure',
    //     },
    //     {
    //       item: 'Artificial Intelligence Feature',
    //     },
    //     {
    //       item: 'Offline version available',
    //     },
    //   ],
    // },
  ]

  return (
    <section className="container pt-12 ">
      <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
        {/* text content---------- */}
        <div className="col-span-12 md:col-span-4">
          <div className="max-md: mb-15">
            <p className="section-tagline">Our Services</p>

            <h2 className="mb-8">
              The world&apos;s best <br />
              companies trust <br />
              aplio.
            </h2>
            <p className="mb-8 max-w-[520px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
            <a href="services.html" className="btn">
              Get More Services
            </a>
          </div>
        </div>

        {/* Card Content------ */}

        <div className="col-span-12 md:col-span-8 1xl:pl-[120px]">
          <div className="relative z-10">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
              <div className="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px] "></div>
              <div className="lg-ml-[170px] h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"></div>
            </div>
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {servicesCard.map((service) => (
                <div
                  className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                  key={service.id}>
                  <div className="dark:border-borderColour-dark rounded border border-dashed border-gray-100 p-10 dark:border-opacity-15 max-lg:p-5">
                    <Image src={service.svg} alt="service logo" className="mb-6 inline-block dark:hidden" />
                    <Image src={service.darkSvg} alt="service logo" className="mb-6 hidden dark:inline-block" />

                    <a href="services-single.html" className="block">
                      <h3 className="mb-2.5">{service.title}</h3>
                    </a>
                    <p className="mb-6">{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="btn-outline btn-sm">
                      {service.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
