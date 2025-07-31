'use client'

import { useEffect, useState, useTransition } from 'react'
import { MdTranslate } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion'
import { setUserLocale } from '@/actions/setUserLocale';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const [isPending, startTransition] = useTransition()

  const toggleDropdown = () => setIsOpen(prev => !prev)

   useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)language=([^;]+)/)
    if (match?.[1]) setCurrentLang(match[1])
  }, [])

  const handleSelect = (code: string) => {
    setCurrentLang(code)
    setIsOpen(false)

    startTransition(async () => {
      await setUserLocale(code)
    })
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="p-3 rounded-full hover:bg-[var(--darkYellow)] transition-colors"
      >
        <MdTranslate className="w-8 h-8 text-[var(--headerText]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 bg-[var(--backgroundFooter)] rounded-md shadow-lg z-50"
          >
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-[var(--darkYellow)] hover:text-[var(--background)] rounded-md ${
                    lang.code === currentLang ? 'text-[var(--yellow)]' : 'text-[var(--mainText)]'
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
