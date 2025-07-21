'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import AbnerDevLoader from '../loading/AbnerDevLoader'

export default function LoaderProvider({ children }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2500) // tempo da animação

    return () => clearTimeout(timeout)
  }, [pathname])

  if (loading) return <AbnerDevLoader />
  return <>{children}</>
}
