import Footer from '@/components/footer/Footer'
import Cta from '@/components/home-1/Cta'
import Faq from '@/components/home-1/Faq'
import Hero from '@/components/home-1/Hero'
import Integration from '@/components/home-1/Integration'
import Solution from '@/components/home-1/Solution'
import Vision from '@/components/home-1/Vision'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Clients from '@/components/shared/Clients'
import Counter from '@/components/shared/Counter'
import FinancialBlog from '@/components/shared/FinancialBlog'
import Services from '@/components/shared/Services'
import Testimonial from '@/components/shared/Testimonial'

export const metadata = {
  title: 'Aplio',
}

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Counter />
        <Vision />
        <Solution />
        <Integration />
        <Faq />
        <Testimonial />
        <FinancialBlog />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
