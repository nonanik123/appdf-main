import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import Clients from '@/components/tr/shared/Clients'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'
import Pricing from '@/components/tr/shared/Pricing'
import TestimonialSingle from '@/components/tr/testimonial/TestimonialSingle'

export const metadata = {
  title: 'Testimonials',
}

const Testimonial = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          title="What our customer’s say <br/> about our company"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <TestimonialSingle />
        <Clients sectionTitle={false} className={'pb-0 pt-0'} />
        <Pricing className={'pt-150 max-md:pt-20'} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Testimonial
