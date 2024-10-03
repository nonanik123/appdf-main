import CareerDetails from '@/components/career/CareerDetails'
import CareerList from '@/components/career/CareerList'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import { AboutFeaturesData } from '@/data/data'

export const metadata = {
  title: 'Career',
}

const CareerPage = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="CAREER PAGE" title="Become a part of the <br/> aplio team" />
        <CareerDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={'OUR VALUE'}
          sectionTitle={'Our business is steered by our core values'}
          className={'relative py-150 max-md:overflow-hidden max-md:py-25'}
        />
        <CareerList />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default CareerPage
