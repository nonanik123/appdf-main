import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Clients from '@/components/shared/Clients'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import Pricing from '@/components/shared/Pricing'
import TestimonialSingle from '@/components/testimonial/TestimonialSingle'

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
