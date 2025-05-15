'use client'

import FeaturedSection from '@/components/featured-projects/featuredProjects'
import ToolSection from '@/components/tool-section/Tool'

export default function HomePage() {
  return (
    <>
      <main className='min-h-screen py-[15vh]'>
        <FeaturedSection />
        <ToolSection />
      </main>
    </>
  )
}
