import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const page = ({ params: { locale } }) => {
  return (
    <>
      <PrimaryNavbar locale={locale} />
      <main>
        <PageHero
       
          title="Destek"
          
        />
        <ContactInfo />
        
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default page
