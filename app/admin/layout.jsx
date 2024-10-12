import '@/scss/theme.scss'

export const metadata = {
  title: 'Admin',
  description: 'Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
