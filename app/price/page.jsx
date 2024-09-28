import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PriceChoose from '@/components/price/PriceChoose'

import Counter from '@/components/shared/Counter'
import Faq from '@/components/shared/Faq'
import NewsLetter from '@/components/shared/NewsLetter'
import Pricing from '@/components/shared/Pricing'

export const metadata = {
  title: 'Pricing Page',
}

const Price = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative overflow-hidden bg-white pt-[120px]  dark:bg-dark-300 max-lg:pt-150 max-md:mb-25">
          <Pricing showPricingText={true} largeTitle pricingDescription />
        </section>
        <Counter />
        <PriceChoose />
        <Faq />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Price
