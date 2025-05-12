'use client'

import LoadingScreen from '@/components/loading/AbnerDevLoader'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4800) // 4.8 segundos

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          
          <main className='min-h-screen pt-[10vh]'>
          </main>
        </>
      )}
    </>
  )
}
