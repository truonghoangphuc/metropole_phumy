'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

type Language = 'vi' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => null,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode, initialLanguage: Language }> = ({ children, initialLanguage }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Get language from cookie on mount
    const savedLanguage = Cookies.get('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    Cookies.set('language', lang, {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    })
    document.documentElement.lang = lang

    // Update URL with new locale
    const currentPath = pathname;
    const alternate = document.documentElement.dataset.alternate;

    const newPath = (alternate && alternate !== 'null') ? (`/${alternate}`) : (currentPath.startsWith('/en') || currentPath.startsWith('/vi')
      ? `/${lang}${currentPath.slice(3)}`
      : `/${lang}${currentPath}`)
    
    router.push(newPath)
    if (window) {
      window.location.href = newPath;
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
} 