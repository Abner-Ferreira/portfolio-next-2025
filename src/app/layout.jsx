import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import LoaderProvider from '@/components/loader-provider/LoaderProvider'
import ScrollLoader from '@/components/scroll-loader/Scroll'
import { GoogleTagManager } from '@next/third-parties/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrains = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Abner Ferreira | Dev Front-end'
  },
  description:
    'Portfolio of Abner Rodrigues Ferreira, front-end developer specialized in ReactJS, NextJS. Experienced in e-commerce, UX/UI, accessibility, and web performance with a strong focus on best practices and design systems.',
  openGraph: {
    title: 'Abner Ferreira | Dev Front-end',
    description: 'Portfolio of Abner Rodrigues Ferreira, front-end developer specialized in ReactJS, NextJS. Experienced in e-commerce, UX/UI, accessibility, and web performance with a strong focus on best practices and design systems.',
    url: 'https://portfolio-abner.vercel.app',
    siteName: 'Abner.Dev',
    images: [
      {
        url: 'https://portfolio-abner.vercel.app/logo.svg', 
        width: 1200,
        height: 630,
        alt: 'Portfolio Logo',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${jetBrains.className} min-h-screen overflow-x-hidden selection:bg-[var(--yellow)] selection:text-[var(--black)] `}
      >
        <LoaderProvider>
          <Header />
          <ScrollLoader />
          {children}
          <Footer />
        </LoaderProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_TRACKING} />
    </html>
  )
}
