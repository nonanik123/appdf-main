import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import ServiceContent from '@/components/tr/service/ServiceContent'
import MembersCounter from '@/components/tr/shared/MembersCounter'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import Pricing from '@/components/tr/shared/Pricing'
import { ServiceData } from '@/data/data'

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  }
}

export async function generateStaticParams() {
  return ServiceData.map((item) => ({
    slug: item.slug,
  }))
}

const ServiceDetails = (props) => {
  const slug = props.params.slug
  const data = ServiceData.find((post) => post.slug === slug)

  return (
    <>
      <SecondaryNavbar />
      <main>
        <ServiceContent data={data} />
        <MembersCounter />
        <Pricing className={'pt-150 max-md:pt-20'} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetails
