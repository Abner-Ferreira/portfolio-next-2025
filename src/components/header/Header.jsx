'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion';

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  const pathname = usePathname()

  const isActive = link => (pathname === link ? 'underline' : '')


  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };
  

  return (
    <>
      {!isClicked ? (
        <header className='min-w-screen bg-[var(--yellow)] h-[10vh] fixed flex justify-between items-center z-50'>
          <img src='/logo.svg' alt='Logo portfolio' className='
            h-1/4 ml-10 mr-10
            md:h-2/6 md:ml-20
          ' />
          <div
            className='flex flex-col items-start gap-[6px] mr-20 cursor-pointer group'
            onClick={() => setIsClicked(true)}
          >
            <span className='
              h-[6px] w-[36px] bg-[var(--headerText)] rounded-full transition-transform duration-300 group-hover:-translate-y-1
              md:h-[8px] md:w-[56px]
            '></span>
            <span className='
              h-[6px] w-[36px] bg-[var(--headerText)] rounded-full self-end
              md:h-[8px] md:w-[56px]
            '></span>
            <span className='
              h-[6px] w-[36px] bg-[var(--headerText)] rounded-full transition-transform duration-300 group-hover:translate-y-1
              md:h-[8px] md:w-[56px]
            '></span>
          </div>
        </header>
      ) : (
        <header
          className='min-w-screen h-screen fixed bg-[var(--background)] z-50 overflow-hidden flex basis-1/2 flex-col-reverse
            
            lg:flex-row
          '
        >
          <div
            className='h-[60vh] w-[100vw]
            sm: flex flex-wrap
            lg:w-[50%] lg:grid lg:grid-cols-3 lg:h-[100vh]
          '
          >
            <motion.a
              href='https://github.com/Abner-Ferreira'
              target='_blank'
              className='bg-[var(--github)] flex justify-center items-center no-underline h-[33.3%] w-[100%]
                lg:h-[100%]
              '
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              custom={0}
            >
              <div
                className='flex items-center justify-evenly flex-row-reverse w-[60%]
                  lg:rotate-270 lg:justify-center lg:w-[100vw]
                '
              >
                <svg
                  viewBox='0 0 85 85'
                  className='
                    ml-8 h-10 w-10
                    sm:ml-18
                    lg:h-[8vh] lg:w-[10vw] lg:ml-26
                  '
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M42.5 1.55222C19.0188 1.55222 0 20.5816 0 44.0522C0 62.8337 12.1762 78.7605 29.0594 84.3741C31.1844 84.7743 31.9635 83.4603 31.9635 82.3305C31.9635 81.3212 31.9281 78.6472 31.9104 75.1055C20.0883 77.6697 17.595 69.4035 17.595 69.4035C15.6613 64.4983 12.8669 63.1878 12.8669 63.1878C9.01708 60.5528 13.1644 60.606 13.1644 60.606C17.4321 60.9035 19.674 64.9835 19.674 64.9835C23.4635 71.4824 29.6225 69.6053 32.0521 68.518C32.4346 65.7697 33.529 63.8962 34.7438 62.8337C25.3052 61.7712 15.385 58.1162 15.385 41.8316C15.385 37.192 17.0319 33.4024 19.759 30.4274C19.2808 29.3543 17.8465 25.0335 20.1308 19.1791C20.1308 19.1791 23.6902 18.0387 31.8183 23.5353C35.2183 22.5897 38.8308 22.1222 42.4433 22.101C46.0558 22.1222 49.6683 22.5897 53.0683 23.5353C61.1433 18.0387 64.7027 19.1791 64.7027 19.1791C66.9871 25.0335 65.5527 29.3543 65.1277 30.4274C67.8371 33.4024 69.484 37.192 69.484 41.8316C69.484 58.1587 59.5496 61.7535 50.0933 62.7983C51.5808 64.0733 52.9621 66.6799 52.9621 70.6607C52.9621 76.3487 52.909 80.9174 52.909 82.2987C52.909 83.4143 53.6527 84.7424 55.8308 84.3174C72.8344 78.7428 85 62.8053 85 44.0522C85 20.5816 65.9706 1.55222 42.5 1.55222Z'
                    fill='white'
                  />
                </svg>

                <p
                   className='text-[var(--white)] text-2xl
                   sm:text-3xl
                   md:text-5xl
                   lg:text-7xl
                 '
                >
                  Github
                </p>
              </div>
            </motion.a>

            <motion.a
              href='https://linkedin.com/in/abner-ferreira'
              target='_blank'
              className='bg-[var(--linkedin)] flex justify-center items-center no-underline h-[33.3%] w-[100%]
                lg:h-[100%]
              '
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              custom={1}
            >
              <div
                className='flex items-center justify-evenly flex-row-reverse w-[60%]
                  lg:rotate-270 lg:justify-center lg:w-[100vw]
                '
              >
                <svg
                  viewBox='0 0 85 85'
                  className='
                    ml-4 h-10 w-10
                    lg:h-[8vh] lg:w-[10vw]
                   '
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_35_40)'>
                    <path
                      d='M25.8305 71.1337V32.8665H13.1111V71.1337H25.8318H25.8305ZM19.4734 27.6426C23.908 27.6426 26.6689 24.7041 26.6689 21.0319C26.5859 17.2759 23.908 14.4195 19.5578 14.4195C15.2045 14.4195 12.3613 17.2759 12.3613 21.0315C12.3613 24.7038 15.1212 27.6423 19.3901 27.6423H19.4724L19.4734 27.6426ZM32.8709 71.1337H45.5894V49.7659C45.5894 48.6237 45.6724 47.4785 46.0084 46.6627C46.9274 44.3767 49.0202 42.0103 52.5348 42.0103C57.1361 42.0103 58.9779 45.5192 58.9779 50.664V71.1337H71.696V49.1924C71.696 37.4389 65.4219 31.9693 57.0537 31.9693C50.193 31.9693 47.1798 35.8039 45.5057 38.4157H45.5904V32.8678H32.8716C33.0376 36.4577 32.8706 71.1351 32.8706 71.1351L32.8709 71.1337Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_35_40'>
                      <rect width='85' height='85' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <p
                  className='text-[var(--white)] text-2xl
                    sm:text-3xl
                    md:text-5xl
                    lg:text-7xl
                  '
                >
                  LinkedIn
                </p>
              </div>
            </motion.a>

            <motion.a
              href='https://wa.me/5511994805611'
              target='_blank'
              className='bg-[var(--phone)] flex justify-center items-center no-underline h-[33.3%] w-[100%]
                lg:h-[100%]
              '
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              custom={2}
            >
              <div
                className='flex items-center justify-evenly flex-row-reverse w-[60%]
                lg:rotate-270 lg:justify-center lg:w-[100vw]
              '
              >
                <svg
                  viewBox='0 0 85 85'
                  className='
                     ml-8 h-10 w-10
                    lg:h-[8vh] lg:w-[10vw]
                   '
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_35_46)'>
                    <path
                      d='M61.8803 50.9364C60.8284 50.4087 55.654 47.8657 54.6907 47.5116C53.7238 47.1609 53.0226 46.9874 52.3178 48.0428C51.6201 49.0947 49.6013 51.4641 48.9886 52.1653C48.3759 52.8701 47.7596 52.9551 46.7078 52.4309C45.6559 51.8997 42.263 50.7912 38.2432 47.207C35.1159 44.4162 33.0015 40.9701 32.3888 39.9147C31.7761 38.8628 32.3251 38.2926 32.8492 37.7684C33.3238 37.2974 33.9046 36.5395 34.4288 35.9268C34.9565 35.3105 35.1301 34.8714 35.4842 34.1666C35.8349 33.4653 35.6613 32.8526 35.3957 32.3249C35.1301 31.7972 33.0263 26.6157 32.1515 24.5084C31.2944 22.4578 30.4267 22.7376 29.7821 22.7022C29.1694 22.6739 28.4682 22.6668 27.7634 22.6668C27.0621 22.6668 25.9217 22.9289 24.9584 23.9843C23.9951 25.0362 21.2751 27.5826 21.2751 32.7641C21.2751 37.942 25.0469 42.9464 25.5711 43.6512C26.0988 44.3524 32.9944 54.9845 43.5521 59.5426C46.0632 60.6264 48.0217 61.2745 49.5517 61.7562C52.0734 62.5601 54.3684 62.4468 56.1782 62.1741C58.2005 61.873 62.4044 59.6276 63.2828 57.1697C64.1611 54.7118 64.1611 52.6045 63.8955 52.1653C63.6334 51.7262 62.9357 51.4641 61.8803 50.9364ZM42.6774 77.1553H42.6632C36.3936 77.1558 30.2393 75.4702 24.8451 72.2749L23.5665 71.517L10.3171 74.9949L13.8517 62.0749L13.0194 60.7503C9.51475 55.1696 7.66069 48.7111 7.67152 42.1212C7.67507 22.8191 23.3824 7.11532 42.6915 7.11532C52.0415 7.11532 60.8319 10.7632 67.4407 17.3791C70.7014 20.6254 73.2859 24.4862 75.0447 28.7381C76.8034 32.9899 77.7014 37.5483 77.6867 42.1495C77.6761 61.4516 61.9724 77.1553 42.6774 77.1553ZM72.4734 12.3534C68.5712 8.42547 63.9282 5.31097 58.8135 3.19045C53.6988 1.06992 48.2142 -0.0144672 42.6774 0.000114611C19.4617 0.000114611 0.56694 18.8949 0.556315 42.1176C0.556315 49.5409 2.49361 56.7872 6.18048 63.1728L0.202148 85.0001L22.5324 79.1422C28.7076 82.5065 35.6274 84.2696 42.6596 84.2705H42.6774C65.8894 84.2705 84.7878 65.3757 84.7984 42.1495C84.8155 36.6148 83.7351 31.1317 81.6195 26.0173C79.504 20.9029 76.3953 16.2587 72.4734 12.3534Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_35_46'>
                      <rect width='85' height='85' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <p
                   className='text-[var(--white)] text-2xl
                   sm:text-3xl
                   md:text-5xl
                   lg:text-7xl
                 '
                >
                  WhatsApp
                </p>
              </div>
            </motion.a>
          </div>

          <div className='h-[100%] w-[100%] bg-[var(--background)] text-[var(--mainText)]'>
            <div className='h-[10vh] w-[100%] bg-[var(--yellow)] flex justify-end items-center '>
              <div
                className='relative w-[40px] h-[40px] gap-[6px] mr-10 hover:cursor-pointer
                  sm:mr-15
                  md:mr-14
                  
                '
                onClick={() => setIsClicked(false)}
              >
                <span
                  className='absolute top-1/2 left-1/2 h-[8px] w-[36px] bg-[var(--headerText)] rounded-full rotate-45 -translate-x-1/2 -translate-y-1/2
                    md:h-[8px] md:w-[56px]
                '
                ></span>
                <span
                  className='absolute top-1/2 left-1/2 h-[8px] w-[36px] bg-[var(--headerText)] rounded-full -rotate-45 -translate-x-1/2 -translate-y-1/2
                    md:h-[8px] md:w-[56px]
                '
                ></span>
              </div>
            </div>
            <div
              className='
              h-[10vh] w-[100%] bg-[var(--yellow)] hidden
              lg:block
            '
            ></div>

            <nav className='h-[100%] xl:pt-0'>
              <ul className='pt-12 flex justify-center items-center flex-col'>
                <li
                  className={` text-3xl m-4  ${isActive('/')} hover:underline
                    sm:self-end sm:m-4 sm:pr-12 sm:text-5xl
                    md:m-4 md:pr-8 md:text-5xl
                    lg:text-7xl lg:pr-24 lg:m-8
                  `}
                >
                  <Link href='/'>Home</Link>
                </li>
                <li
                  className={` text-3xl m-4  ${isActive(
                    '/work'
                  )} hover:underline
                    sm:self-end sm:m-4 sm:pr-12 sm:text-5xl
                    md:m-4 md:pr-8 md:text-5xl
                    lg:text-7xl lg:pr-24 lg:m-8
                  `}
                >
                  <Link href='/work'>Work</Link>
                </li>
                <li
                  className={` text-3xl m-4  ${isActive(
                    '/resume'
                  )} hover:underline
                    sm:self-end sm:m-4 sm:pr-12 sm:text-5xl
                    md:m-4 md:pr-8 md:text-5xl
                    lg:text-7xl lg:pr-24 lg:m-8
                  `}
                >
                  <Link href='/resume'>Resume</Link>
                </li>
                <li
                  className={` text-3xl m-4  ${isActive(
                    '/contact'
                  )} hover:underline
                  sm:self-end sm:m-4 sm:pr-12 sm:text-5xl
                  md:m-4 md:pr-8 md:text-5xl
                  lg:text-7xl lg:pr-24 lg:m-8
                `}
                >
                  <Link href="mailto:abnerferr2015@gmail.com?subject=I'd like to learn more about your work, Abner!">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  )
}
