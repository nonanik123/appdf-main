import CareerDetails from '@/components/tr/career/CareerDetails'
import CareerList from '@/components/tr/career/CareerList'
import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'
import PaymentFeatures from '@/components/tr/shared/PaymentFeatures'
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
