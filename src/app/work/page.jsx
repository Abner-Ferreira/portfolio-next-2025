import ProjectSectionLeft from '@/components/project-section/ProjectSectionLeft'
import ProjectSectionRight from '@/components/project-section/ProjectSectionRight'
import { projects } from '@/data/projects'



export default function Work() {
  return (
    <>
      <main className='min-h-screen py-[15vh] flex flex-col justify-center items-center'>

        <h1 className='text-[var(--mainText)] text-2xl font-bold
          md:text-5xl md:w-[80%]
        '> {'< All works />'}</h1>
        
        {projects.map((project, idx) =>
          idx % 2 === 0 ? (
            <ProjectSectionRight key={idx} {...project} />
          ) : (
            <ProjectSectionLeft key={idx} {...project} />
          )
        )}
      </main>
    </>
  )
}
