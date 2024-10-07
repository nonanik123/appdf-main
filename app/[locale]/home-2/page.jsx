import Footer from '@/components/footer/Footer'
import Blog from '@/components/home-2/Blog'
import CoreFeature from '@/components/home-2/CoreFeature'
import Hero from '@/components/home-2/Hero'
import Rating from '@/components/home-2/Rating'
import WhyUs from '@/components/home-2/WhyUs'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Clients from '@/components/shared/Clients'
import MembersCounter from '@/components/shared/MembersCounter'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import Pricing from '@/components/shared/Pricing'
import { PaymentFeaturesData } from '@/data/data'

export const metadata = {
  title: 'Payment',
}

const HomePage2 = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <Hero />
        <Rating />
        <CoreFeature />
        <WhyUs />
        <PaymentFeatures
          features={PaymentFeaturesData}
          sectionTag="MORE FEATURES"
          sectionTitle="Managing your money has never been easier"
          className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
        />
        <MembersCounter />
        <Pricing />
        <Clients sectionTitle={false} className={'pb-0 pt-0'} />
        <Blog />
        <CallToAction title="Start your best payment experience now!" />
      </main>
      <Footer />
    </>
  )
}

export default HomePage2
