import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Clients from '@/components/shared/Clients'

import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/home-4/Hero'

import Rating from '@/components/home-2/Rating'
import Pricing from '@/components/shared/Pricing'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import { PaymentFeaturesData } from '@/data/data'
import DataIntegration from '@/components/home-4/DataIntegration'
import Blog from '@/components/home-2/Blog'
export const metadata = {
  title: 'Banking',
}

const HomePage3 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero/>
        <DataIntegration />
       
        <Clients sectionTitle={false} className={'pb-0 pt-0'} />
        <Rating />
        <PaymentFeatures
          features={PaymentFeaturesData}
         
          sectionTitle="Neden Dialog Fusion"
          className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
        />
        <Pricing />
        <Blog />


        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default HomePage3
