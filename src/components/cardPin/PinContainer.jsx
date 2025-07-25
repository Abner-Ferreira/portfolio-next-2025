'use client'
import { useState } from 'react'
import { PinPerspective } from './PinPerspective'
import { cn } from './utils'

export function PinContainer({
  children,
  title,
  href = '/',
  className,
  containerClassName,
}) {
  const [transform, setTransform] = useState(
    'translate(-50%,-50%) rotateX(0deg)'
  )

  const onMouseEnter = () => {
    setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)')
  }

  const onMouseLeave = () => {
    setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)')
  }

  return (
    <a
      className={cn('relative group/pin cursor-pointer', containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href}
      target='_blank'
    >
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
      >
        <div
          style={{ transform }}
          className='absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-[var(--backgroundFooter)] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden'
        >
          <div className={cn('relative z-10', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </a>
  )
}
