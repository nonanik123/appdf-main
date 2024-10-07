import Footer from '@/components/footer/Footer'
import ServiceCardWithLeftText from '@/components/home-4/ServiceCardWithLeftText'
import EasyStepFeature from '@/components/home-5/EasyStepFeature'
import Hero from '@/components/home-5/Hero'
import HostingFeature from '@/components/home-5/HostingFeature'
import TrustedCompany from '@/components/home-5/TrustedCompany'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import FinancialBlog from '@/components/shared/FinancialBlog'
import NewsLetter from '@/components/shared/NewsLetter'
import Pricing from '@/components/shared/Pricing'
import Testimonial from '@/components/shared/Testimonial'

export const metadata = {
  title: 'Hosting',
}
export default function page() {
  return (
    <>
      <SecondaryNavbar hideTopBar />
      <main>
        <Hero />
        <TrustedCompany />
        <HostingFeature />
        <Pricing />
        <ServiceCardWithLeftText />
        <Testimonial />
        <EasyStepFeature />
        <FinancialBlog className="dark:bg-dark-300" />
        <div className="pt-150">
          <NewsLetter />
        </div>
      </main>
      <Footer />
    </>
  )
}
