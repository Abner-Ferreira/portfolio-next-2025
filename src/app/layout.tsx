import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import LoaderProvider from '@/components/loader-provider/LoaderProvider'
import ScrollLoader from '@/components/scroll-loader/Scroll'
import { GoogleTagManager } from '@next/third-parties/google'
import { JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import './globals.css'
import type { Metadata } from 'next'

const jetBrains = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abner Ferreira | Full Stack Developer',
  description:
    'Portfolio of Abner Ferreira, Full Stack Developer specialized in Python, React, Next.js, and TypeScript. Focused on building modern, accessible, scalable, and high-performance applications with strong emphasis on best practices, UX/UI, and business-driven solutions.',
  openGraph: {
    title: 'Abner Ferreira | Full Stack Developer',
    description:
      'Portfolio of Abner Ferreira, Full Stack Developer specialized in Python, React, Next.js, and TypeScript. Focused on building modern, accessible, scalable, and high-performance applications with strong emphasis on best practices, UX/UI, and business-driven solutions.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Abner Ferreira | Full Stack Developer',
    description:
      'Portfolio of Abner Ferreira, Full Stack Developer specialized in Python, React, Next.js, and TypeScript. Focused on building modern, accessible, scalable, and high-performance applications.',
    images: ['https://portfolio-abner.vercel.app/logo.svg'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body
        className={`${jetBrains.className} min-h-screen overflow-x-hidden selection:bg-[var(--yellow)] selection:text-[var(--black)]`}
      >
        <NextIntlClientProvider>
          <LoaderProvider>
            <Header />
            <ScrollLoader />
            {children}
            <Footer />
          </LoaderProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_TRACKING || ''} />
    </html>
  )
}
