'use client'

import { useTranslations } from 'next-intl'
import CardPin from '../cardPin/CardPin'
import Titles from '../titles/Titles'

export default function FeaturedSection() {
  const t = useTranslations('Spotlight')

  return (
    <>
      <section className='min-h-[80vh] flex flex-col items-center justify-center p-8 bg-[var(--background)]'>
        <a href='#spotlight'>
          <Titles title={t('spotlight_title')} />
        </a>

        <CardPin />
      </section>
    </>
  )
}
