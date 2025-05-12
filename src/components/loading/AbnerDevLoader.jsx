'use client'

import { motion } from 'framer-motion'

export default function AbnerDevLoader() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -40 }}
      transition={{
        delay: 3.5, // 2.8s de fill + 0.4s de fill animation + margem
        duration: 0.6,
        ease: 'easeInOut',
      }}
      className='flex items-center justify-center min-h-screen bg-[var(--background)]'
    >
      <div className='w-[80vw]'>
        <motion.svg
          width='1642'
          height='215'
          viewBox='0 0 1642 215'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-auto'
        >
          {/* Letra A */}
          <motion.path
            d='M0.5 210L64.1 0H111.5L175.1 210H148.1L132.8 157.8H42.8L27.5 210H0.5ZM49.7 134.4H125.9L89.6 10.8H86L49.7 134.4Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' }, 
            }}
          />

          {/* Letra B */}
          <motion.path
            d='M196.791 210V186.6H214.791V23.4H196.791V0H281.691C301.891 0 317.291 5.20001 327.891 15.6C338.491 26 343.791 39 343.791 54.6V58.2C343.791 69.6 340.391 79.2 333.591 87C326.791 94.8 318.391 100.1 308.391 102.9V106.5C318.391 109.1 326.791 114.5 333.591 122.7C340.391 130.7 343.791 140.3 343.791 151.5V155.1C343.791 170.9 338.491 184 327.891 194.4C317.291 204.8 301.891 210 281.691 210H196.791ZM239.991 93H280.791C292.791 93 302.291 89.9 309.291 83.7C316.291 77.5 319.791 69 319.791 58.2V56.4C319.791 46.2 316.091 38.2 308.691 32.4C301.291 26.4 291.691 23.4 279.891 23.4H239.991V93ZM239.991 186.6H279.891C291.691 186.6 301.291 183.7 308.691 177.9C316.091 171.9 319.791 163.7 319.791 153.3V151.5C319.791 140.9 316.291 132.4 309.291 126C302.291 119.6 292.791 116.4 280.791 116.4H239.991V186.6Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 0.2, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra N */}
          <motion.path
            d='M385.283 210V0H435.683L496.283 199.2H499.883V0H525.083V210H474.683L414.083 10.8H410.483V210H385.283Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 0.4, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra E */}
          <motion.path
            d='M575.274 210V0H702.474V23.4H600.474V93H700.674V116.4H600.474V186.6H704.274V210H575.274Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 0.6, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra R */}
          <motion.path
            d='M756.266 210V0H831.266C845.666 0 857.566 2.7 866.966 8.10001C876.566 13.3 883.666 20.2 888.266 28.8C893.066 37.4 895.466 46.8 895.466 57V66C895.466 73.8 893.266 81.6 888.866 89.4C884.666 97.2 878.066 103.2 869.066 107.4V111C875.066 111.8 879.766 114.2 883.166 118.2C886.566 122 888.266 127.4 888.266 134.4V210H863.066V139.8C863.066 134.6 861.866 130.6 859.466 127.8C857.066 125 852.866 123.6 846.866 123.6H781.466V210H756.266ZM781.466 100.2H828.266C856.266 100.2 870.266 88.2 870.266 64.2V58.8C870.266 48.2 866.766 39.7 859.766 33.3C852.966 26.7 842.466 23.4 828.266 23.4H781.466V100.2Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 0.8, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* PONTO */}
          <motion.path
            d='M1006.26 214.2C1000.66 214.2 995.757 212.1 991.557 207.9C987.357 203.7 985.257 198.8 985.257 193.2C985.257 187.4 987.357 182.5 991.557 178.5C995.757 174.3 1000.66 172.2 1006.26 172.2C1012.06 172.2 1016.96 174.3 1020.96 178.5C1025.16 182.5 1027.26 187.4 1027.26 193.2C1027.26 198.8 1025.16 203.7 1020.96 207.9C1016.96 212.1 1012.06 214.2 1006.26 214.2Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 1, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra D */}
          <motion.path
            d='M1120.05 210V186.3H1138.05V23.4H1120.05V0H1189.05C1214.85 0 1233.75 6.3 1245.75 18.9C1257.95 31.3 1264.05 51 1264.05 78V132C1264.05 159 1257.95 178.8 1245.75 191.4C1233.75 203.8 1214.85 210 1189.05 210H1120.05ZM1163.25 186.6H1185.45C1197.65 186.6 1207.65 185 1215.45 181.8C1223.45 178.4 1229.35 172.6 1233.15 164.4C1236.95 156.2 1238.85 144.8 1238.85 130.2V79.8C1238.85 65.2 1236.95 53.8 1233.15 45.6C1229.35 37.4 1223.45 31.7 1215.45 28.5C1207.65 25.1 1197.65 23.4 1185.45 23.4H1163.25V186.6Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 1.2, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra E */}
          <motion.path
            d='M1310.04 210V0H1437.24V23.4H1335.24V93H1435.44V116.4H1335.24V186.6H1439.04V210H1310.04Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 1.4, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />

          {/* Letra V */}
          <motion.path
            d='M1533.03 210L1473.63 0H1500.63L1555.53 199.2H1559.13L1614.03 0H1641.03L1581.63 210H1533.03Z'
            stroke='#D4AF37'
            strokeWidth={3}
            initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
            animate={{ pathLength: 1, fill: '#D4AF37' }}
            transition={{
              pathLength: { delay: 1.6, duration: 1, ease: 'easeInOut' },
              fill: { delay: 2.8, duration: 0.4, ease: 'easeInOut' },
            }}
          />
        </motion.svg>
      </div>
    </motion.div>
  )
}
