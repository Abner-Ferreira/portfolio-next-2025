'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, ReactNode } from 'react'
import AbnerDevLoader from '../loading/AbnerDevLoader'

interface LoaderProviderProps {
  children: ReactNode
}

export default function LoaderProvider({ children }: LoaderProviderProps) {
  const pathname = usePathname()
  const previousPathname = useRef<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Primeira renderização → não mostra loader
    if (previousPathname.current === null) {
      previousPathname.current = pathname
      return
    }

    // Só ativa loader se a rota realmente mudou
    if (previousPathname.current !== pathname) {
      setLoading(true)

      const timeout = setTimeout(() => {
        setLoading(false)
      }, 2600)

      previousPathname.current = pathname

      return () => clearTimeout(timeout)
    }
  }, [pathname])

  if (loading) return <AbnerDevLoader />
  return <>{children}</>
}
