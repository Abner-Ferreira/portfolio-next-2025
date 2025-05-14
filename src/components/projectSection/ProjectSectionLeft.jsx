'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function ProjectSectionLeft({
  name,
  link,
  github,
  img,
  description,
}) {
  return (
    <>
      <section
        className='h-[100vh] text-[var(--mainText)] px-6 py-20 flex flex-col-reverse gap-12 my-10
        md:h-[80vh] md:w-[90%] md:flex-row md:items-center md:justify-center md:gap-16 md:px-20
        lg:h-[60vh]
       '
      >
        {/* Coluna da DIREITA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full text-center flex flex-col justify-center
          md:text-left md:w-[50%]
          '
        >
          <h2
            className='
              text-[18px] font-bold text-[var(--yellow)] border-4 border-[var(--yellow)] inline-block px-6 py-2 mb-8 self-center 
              sm:text-2xl
              md:text-3xl md:self-start
          '
          >
            {name}
          </h2>

          <p className='text-[14px] text-justify mb-8 text-[var(--mainText)]
            sm:text-[16px]
          '>
            {description}
          </p>

          <div
            className='
            w-[100%] flex justify-between items-center flex-col gap-10
            
            md:w-[80%] md:flex-row
          '
          >
            <a
              href={link}
              target='_blank'
              className='w-[100%] flex justify-center items-center bg-[var(--yellow)] text-[var(--mainText)] px-6 py-2 border-2 border-[var(--yellow)] hover:bg-transparent hover:text-[var(--yellow)] transition-all duration-300 self-center hover:cursor-pointer
              md:self-start md:w-[40%]
            '
            >
              visit →
            </a>

            <a
              href={github}
              target='_blank'
              className='w-[100%] flex justify-center items-center bg-transparent text-[var(--yellow)] px-6 py-2 border-b-2 border-[var(--yellow)] hover:border-2 transition-all duration-75 self-center hover:cursor-pointer
              md:self-start md:w-[40%]
            '
            >
              view code →
            </a>
          </div>
        </motion.div>

        {/* Coluna da ESQUERDA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='w-full flex justify-center
            md:w-1/2 md:justify-end
          '
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor='#ffffff'
            scale={1.02}
            className='max-w-[300px] w-full
              sm:max-w-[350px]
              md:max-w-[500px]
            '
          >
            <Image
              src={img}
              alt={name}
              width={800}
              height={600}
              className='rounded-2xl shadow-2xl w-full h-auto'
            />
          </Tilt>
        </motion.div>
      </section>
    </>
  )
}
