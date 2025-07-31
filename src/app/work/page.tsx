'use client'

import ProjectSectionLeft from '@/components/project-section/ProjectSectionLeft'
import ProjectSectionRight from '@/components/project-section/ProjectSectionRight'
import { getProjects } from '@/data/projects'
import { useTranslations } from 'next-intl'

export default function Work() {
  const t = useTranslations('Work')
  const tProjects = useTranslations('Projects')

  const projects = getProjects(tProjects)

  return (
    <main className='min-h-screen py-[15vh] flex flex-col justify-center items-center'>
      <h1 className='text-[var(--mainText)] text-2xl font-bold md:text-5xl md:w-[80%]'>
        {t('work_title')}
      </h1>

      {projects.map((project, idx) =>
        idx % 2 === 0 ? (
          <ProjectSectionRight key={idx} {...project} />
        ) : (
          <ProjectSectionLeft key={idx} {...project} />
        )
      )}
    </main>
  )
}
