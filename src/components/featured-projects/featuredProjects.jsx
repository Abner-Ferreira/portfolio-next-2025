'use client'

import Image from 'next/image'
import CardPin from '../cardPin/CardPin'
import Titles from '../titles/Titles'

export default function FeaturedSection() {
  return (
    <>
      <section className='min-h-[80vh] flex flex-col items-center justify-center p-8 bg-[var(--background)]'>
        <Titles title={'Spotlight '} />

        <CardPin />

      </section>
    </>
  )
}
