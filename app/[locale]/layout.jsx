import '@/scss/theme.scss'
import Providers from '@/utils/providers'
import PropTypes from 'prop-types'
import { cn } from '@/utils/cn'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta_sans',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: {
    default: 'Aplio - Aplio Sass Landing Page',
    template: '%s - Aplio Sass Landing Page',
  },
  description:
    'Aplio is an exceptional Next js template tailored for SaaS landing websites. Embodying the essence of modern SaaS platforms.',
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body
        className={cn(
          'relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300',
          inter.variable,
          jakarta_sans.variable,
          playfair.variable,
        )}>
        <NextIntlClientProvider messages={messages}>
          <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node,
  params: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}