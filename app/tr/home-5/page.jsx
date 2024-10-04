import Footer from '@/components/tr/footer/Footer'
import ServiceCardWithLeftText from '@/components/tr/home-4/ServiceCardWithLeftText'
import EasyStepFeature from '@/components/tr/home-5/EasyStepFeature'
import Hero from '@/components/tr/home-5/Hero'
import HostingFeature from '@/components/tr/home-5/HostingFeature'
import TrustedCompany from '@/components/tr/home-5/TrustedCompany'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import FinancialBlog from '@/components/tr/shared/FinancialBlog'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import Pricing from '@/components/tr/shared/Pricing'
import Testimonial from '@/components/tr/shared/Testimonial'

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
