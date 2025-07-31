'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, ReactNode } from 'react'
import AbnerDevLoader from '../loading/AbnerDevLoader'

interface LoaderProviderProps {
  children: ReactNode
}

export default function LoaderProvider({ children }: LoaderProviderProps) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2600) // tempo da animação

    return () => clearTimeout(timeout)
  }, [pathname])

  if (loading) return <AbnerDevLoader />
  return <>{children}</>
}
