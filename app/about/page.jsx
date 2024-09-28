
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Clients from '@/components/shared/Clients'
import PageHero from '@/components/shared/PageHero'
import Rating from '@/components/home-2/Rating'

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
