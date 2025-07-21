'use client'

import Image from 'next/image'
import Abner from '../../../public/abner-img.svg'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='h-[100vh] w-[100vw] flex justify-center items-center
          
        '
      >
        <div
          className='w-full flex flex-wrap flex-row justify-evenly items-center bg-[var(--backgroundFooter)] p-3 rounded-2xl min-h-[50%] max-h-[60%]
            md:max-w-[80vw] md:flex-col
        '
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='w-full text-[var(--white)]
              md:w-[50%]
            '
          >
            <motion.span
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='w-[100%] text-[14px] h-14 flex items-center justify-center px-4 py-2 my-5 rounded-md bg-[var(--yellow)] text-[var(--background)] font-bold
              sm:w-[100%] 
              md:w-[80%] md:text-[18px]
              lg:w-[60%] 
              '
            >
              Hi there! I'm Abner Ferreira
              <picture className='ml-1 md:ml-3'>
                <source
                  srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f919_1f3fe/512.webp'
                  type='image/webp'
                />
                <img
                  src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f919_1f3fe/512.gif'
                  alt='🤙'
                  className='w-[20px] h-[20px]
                    md:w-[40px] md:h-[40px]
                  '
                />
              </picture>
            </motion.span>
            <p className='text-[18px] my-8
              md:text-2xl
              lg:text-3xl
            '>
              I'm a{' '}
              <span className='font-bold text-[var(--darkYellow)]'>
                Frontend Developer
              </span>{' '}
              focused on{' '}
              <span className='font-bold text-[var(--darkYellow)]'>Modern</span>
              ,{' '}
              <span className='font-bold text-[var(--darkYellow)]'>
                Accessible
              </span>
              , and
              <span className='font-bold text-[var(--darkYellow)]'>
                {' '}
                Responsive
              </span>{' '}
              interfaces.
            </p>
            <p className='text-[12px] text-justify
              md:text-[12px]
              lg:text-[14px]
            '>
              Frontend Engineer specializing in React, Next.js, and TypeScript.
              I turn challenges into high-performance solutions with fast,
              precise execution. A strong communicator and collaborator, I
              deliver complex projects on time while bridging technical
              excellence with business vision. Continuously innovating yet
              unafraid of the necessary grind, from pixel-perfect UI to the most
              challenging integrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <Image
              src={Abner}
              alt='Abner cartooned image'
              priority
              className='hidden w-[200px] h-[250px]
              md:block md:w-[300px]
              lg:w-[500px] lg:h-[500px]
              '
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
