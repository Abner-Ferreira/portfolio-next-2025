"use client"

import { motion, useScroll } from "framer-motion"

export default function ScrollLoader() {

  const { scrollYProgress } = useScroll()
  
  return (
    <>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: '10vh',
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: 'var(--darkYellow)',
        }}
        className="z-20"
      />
    </>
  )
}
