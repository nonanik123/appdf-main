import ContactInfo from '@/components/tr/contact/ContactInfo'
import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import ContactForm from '@/components/tr/shared/ContactForm'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import PageHero from '@/components/tr/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const page = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero title="Destek" />
        <ContactInfo />

        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default page
