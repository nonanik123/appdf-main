import Link from 'next/link'
import IntegrationAnimation from './IntegrationAnimation'

const Integration = () => {
  return (
    <section className="bg-white pb-150 pt-5 dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="section-tagline">Top Integration</p>

          <h2 className="mb-8">Omni-Channel Experience</h2>
          <p className="mb-10">
          Send and reply to WhatsApp messages, Facebook messages, Telegram messages, text messages, emails, tickets, and chat messages in Support Board. Save time with communication that happens in one place.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
        <IntegrationAnimation />
      </div>
    </section>
  )
}

export default Integration
