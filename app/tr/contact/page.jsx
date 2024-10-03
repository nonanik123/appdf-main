import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import ContactForm from '@/components/shared/ContactForm'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const page = () => {
  return (
    <>
      <SecondaryNavbar />
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
