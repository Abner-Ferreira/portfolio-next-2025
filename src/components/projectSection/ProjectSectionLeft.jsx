'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function ProjectSectionLeft({
  name,
  link,
  img,
  problem,
  solution,
}) {
  return (
    <>
      <section
        className='h-[100vh] text-[var(--mainText)] px-6 py-20 flex flex-col-reverse gap-12
        md:h-[60vh] md:flex-row md:items-center md:justify-center md:gap-16 md:px-20
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
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--yellow)] border-4 border-[var(--yellow)] inline-block px-6 py-2 mb-6 self-center md:self-start'>
            {name}
          </h2>

          <p className='mb-4 text-[var(--mainText)]'>
            <span className='text-[var(--yellow)]'>Problem:</span> {problem}
          </p>

          <p className='mb-8 text-[var(--mainText)]'>
            <span className='text-[var(--yellow)]'>Solution:</span> {solution}
          </p>

          <a
            href={link}
            target='_blank'
            className='inline-block bg-[var(--yellow)] text-[var(--mainText)] px-6 py-2 border-2 border-[var(--yellow)] hover:bg-transparent hover:text-[var(--yellow)] transition-all duration-300 self-center hover:cursor-pointer
            md:self-start
            '
          >
            visit →
          </a>
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
            className='max-w-[500px] w-full'
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
