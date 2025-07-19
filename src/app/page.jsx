'use client'

import FeaturedSection from '@/components/featured-projects/featuredProjects'
import Home from '@/components/home/Home'
import ToolSection from '@/components/tool-section/Tool'

export default function HomePage() {
  return (
    <>
      <main className='min-h-screen py-[10vh]'>
        <Home />
        <FeaturedSection />
        <ToolSection />
      </main>
    </>
  )
}
