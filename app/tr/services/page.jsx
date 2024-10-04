import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import MembersCounter from '@/components/tr/shared/MembersCounter'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'
import Pricing from '@/components/tr/shared/Pricing'
import Services from '@/components/tr/shared/Services'

export const metadata = {
  title: 'Services',
}
export default function ServicePage() {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle="OUR SERVICES"
          title="The world’s best companies <br> trust aplio "
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <Services sectionDetails={false} />
        <MembersCounter />
        <Pricing className={'pt-150 max-md:pt-20'} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}
