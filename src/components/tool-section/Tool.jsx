import { tools } from '@/data/tools'
import Titles from '../titles/Titles'

export default function ToolSection() {
  return (
    <>
      <section className='min-h-[50vh] flex flex-col justify-center items-center'>
        <Titles title={'Tooling'}/>

        <div
          className='w-full flex flex-wrap justify-center gap-5 bg-[var(--backgroundFooter)] p-7 rounded-2xl 
            md:max-w-[60vw]
        '
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className='w-[45%] h-14 flex items-center justify-start gap-3 px-4 py-2 rounded-md bg-[var(--background)]
              sm:w-[30%] 
              md:w-[30%] 
              lg:w-[18%] '
              title={tool.name}
            >
              <img
                src={tool.img}
                alt={`logo ${tool.name}`}
                className={`w-6 h-6 ${tool.name === 'Github' ? 'invert' : ''}`}
              />
              <p className='text-sm text-[var(--mainText)] font-medium truncate'>
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
