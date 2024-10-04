import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import CallToAction from '@/components/tr/shared/CallToAction'
import Clients from '@/components/tr/shared/Clients'
import PageHero from '@/components/tr/shared/PageHero'
import Rating from '@/components/tr/home-2/Rating'

export const metadata = {
  title: 'About',
}
const About = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle="Dialog  Fusion Hakkında"
          title="Geleceğin teknolojilerini bugünden kullanın"
          paragraph="Tüm satış ve destek kanallarınızı eğitilebilir yapay zeka desteği ile tek ekrandan yönetme ve entegrasyonlar sayesinde süreçlerinizi hızlandırma ayrıcalığına erişin."
        />

        <Clients sectionTitle={false} className={'pb-0 pt-0'} />
        <Rating />

        <CallToAction title="Hadi Şimdi Başlayalım!" />
      </main>
      <Footer />
    </>
  )
}

export default About
