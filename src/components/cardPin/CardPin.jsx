'use client'
import React from 'react'
import { PinContainer } from './PinContainer'
import { projects } from '@/data/projects'

export default function CardPin() {
  return (
    <div className='min-h-[70vh] w-full flex items-center justify-center flex-wrap gap-16'>
      {projects.map(project =>
        project.spotlight ? (
          <PinContainer
            title={project.name}
            href={project.link}
            key={project.name}
          >
            <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]'>
              <h1 className='max-w-xs !pb-2 !m-0 font-bold text-base text-[var(--mainText)]'>
                {project.name}
              </h1>
              <div className='text-base !m-0 !p-0 font-normal'>
                <span className='text-[var(--secundaryText)]'>
                  {project.shortDescription}
                </span>
              </div>
              <div className='w-full h-50 rounded-lg mt-4 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${project.img})` }}/>
            </div>
          </PinContainer>
        ) : (
          ""
        )
      )}
    </div>
  )
}
