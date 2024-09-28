import Feature from '@/components/home-4/Feature'
import ProcessInstallation from '@/components/home-4/ProcessInstallation'
import ServiceCardWithLeftText from '@/components/home-4/ServiceCardWithLeftText'
import ShareClientMarquee from '@/components/home-4/ShareClientMarquee'
import DataIntegration from '@/components/home-4/DataIntegration'
import Hero from '@/components/home-4/Hero'
import CallToAction from '@/components/shared/CallToAction'
import FinancialBlog from '@/components/shared/FinancialBlog'
import MembersCounter from '@/components/shared/MembersCounter'
import TeamMembers from '@/components/shared/TeamMembers'
import FAQWithLeftText from '@/components/home-4/FAQWithLeftText'
import TopIntegration from '@/components/home-4/TopIntegration'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Analytics',
}

const HomePage4 = () => {
  return (
    <>
      <SecondaryNavbar hideTopBar />
      <main>
        <Hero />
        <DataIntegration />
        <ShareClientMarquee />
        <Feature />
        <ProcessInstallation />
        <ServiceCardWithLeftText />
        <TeamMembers />
        <FAQWithLeftText />
        <TopIntegration />
        <MembersCounter />
        <FinancialBlog className="dark:bg-dark-300" />
        <CallToAction title="Boost Your Revenue Using Our Data Analytics Solutions" />
      </main>
      <Footer />
    </>
  )
}

export default HomePage4
