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
  title: 'Abner Ferreira | Dev Front-end',
  description:
    'Portfólio de Abner Rodrigues Ferreira, desenvolvedor front-end especializado em ReactJS, NextJS. Experiência em e-commerces, UX/UI, acessibilidade e performance web com foco em boas práticas e design system. Portfolio of Abner Rodrigues Ferreira, front-end developer specialized in ReactJS, NextJS. Experienced in e-commerce, UX/UI, accessibility, and web performance with a strong focus on best practices and design systems.',
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
