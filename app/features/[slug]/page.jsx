import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import getMarkDownContent from '@/utils/getMarkDownContent'
import getMarkDownData from '@/utils/getMarkDownData'

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faFacebook, faTelegram, faRocketchat, faGoogle} from '@fortawesome/free-brands-svg-icons';


export async function generateMetadata({ params }) {
  const featuresData = getMarkDownData('data/features')
  const featuress = featuresData.find((features) => features.slug === params.slug)
  return {
    title: featuress?.data?.title,
  }
}

export async function generateStaticParams() {
  const featuresData = getMarkDownData('data/features')
  return featuresData.map((item) => ({
    slug: item.slug,
  }))
}

const Features = (props) => {
  const dataFolder = 'data/features/'
  const slug = props.params.slug
  const featuresDetails = getMarkDownContent(dataFolder, slug)
  const postParams = featuresDetails.data

  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="hero  relative overflow-hidden pb-[60px] pt-[240px] max-lg:pt-150">
          <div className="container">
            <div className="mx-auto max-w-[948px] text-center">

              <h1 className="mb-10 max-lg:mb-10">{postParams.title}</h1>
            </div>
          </div>
        </section>
        <section className="relative mb-150">
          <div className="absolute -top-[1000px] left-0 right-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1600px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="grid grid-cols-12 max-lg:gap-y-25 lg:gap-16">
              <div className="singlePage col-span-full max-lg:order-2 lg:col-span-8">
                <ReactMarkdown>{featuresDetails.content}</ReactMarkdown>
              </div>
              <div className="col-span-full self-start max-lg:order-1 lg:col-span-4 ">
                <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
                  <div className=" rounded border border-dashed border-gray-100 bg-white px-8 py-10 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
                    <h3 className="mb-1">Mesaj Entegrasyonları</h3>
                    <div className=" [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark ">
                      
                    <div className="py-5">
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faRocketchat} style={{ color: '#0088cc', fontSize: '1.5em', marginRight: '4px' }} /> Site içi Chat
      </h4>               <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', fontSize: '1.5em', marginRight: '10px' }} /> Facebook</h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '1.5em', marginRight: '10px' }} /> İnstagram</h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '1.5em', marginRight: '10px' }} /> Whatsapp</h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faRocketchat} style={{ color: '#0088cc', fontSize: '1.5em', marginRight: '4px' }} /> Site içi Chat
      </h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '1.5em', marginRight: '10px' }} /> Twitter</h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faGoogle} style={{ color: '#DB4437', fontSize: '1.5em', marginRight: '10px' }} /> Google Business</h4>
                          <h4 className="mb-2 text-lg font-medium"><FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc', fontSize: '1.5em', marginRight: '10px' }} /> Telegram</h4> 
                        </div>
                        <h3 className="mb-1">CRM / Mail Entegrasyonları</h3>
                   
                      
                        <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Mailchimp</h4>
<h4 className="mb-2 text-lg font-medium">Elastic Email</h4>
<h4 className="mb-2 text-lg font-medium">Campaign Monitor</h4>
<h4 className="mb-2 text-lg font-medium">Sendinblue</h4>
<h4 className="mb-2 text-lg font-medium">SendGrid</h4>
<h4 className="mb-2 text-lg font-medium">HubSpot</h4>
<h4 className="mb-2 text-lg font-medium">Moosend</h4>
<h4 className="mb-2 text-lg font-medium">GetResponse</h4>
<h4 className="mb-2 text-lg font-medium">ConvertKit</h4>
<h4 className="mb-2 text-lg font-medium">ActiveCampaign</h4>
<h4 className="mb-2 text-lg font-medium">MailerLite</h4>
<h4 className="mb-2 text-lg font-medium">Mailjet</h4>
<h4 className="mb-2 text-lg font-medium">Calendly</h4>
                        </div>

                     
                    </div>

                    <div>
                      <Link href="/" className="btn w-full text-center">
                        Ücretsiz Başla
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Features
