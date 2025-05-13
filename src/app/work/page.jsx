import ProjectSectionLeft from '@/components/projectSection/ProjectSectionLeft'
import ProjectSectionRight from '@/components/projectSection/ProjectSectionRight'
import { projects } from '@/data/projects'



export default function Work() {
  return (
    <>
      <main className='min-h-screen py-[15vh] flex flex-col justify-center items-center'>
        {projects.map((project, idx) =>
          project.side === 'right' ? (
            <ProjectSectionRight key={idx} {...project} />
          ) : (
            <ProjectSectionLeft key={idx} {...project} />
          )
        )}
      </main>
    </>
  )
}
