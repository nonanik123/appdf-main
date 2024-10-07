import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import MembersCounter from '@/components/shared/MembersCounter'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import Pricing from '@/components/shared/Pricing'
import Services from '@/components/shared/Services'

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
