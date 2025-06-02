'use client'

import { createContext, useContext, useState } from 'react'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState < LanguageContextType['language'] > ('vi');
  // const router = useRouter()
  const pathname = usePathname()

  const setLanguage = (newLanguage: string) => {    
    // Update the cookie
    Cookies.set('language', newLanguage, {
      expires: 365,
      path: '/',
      sameSite: 'lax'
    })

    // Update state
    setLanguageState(newLanguage)

    // Get the current path without the language prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}\//, '/')
    
    // Force a hard navigation to ensure the server gets the new cookie
    window.location.href = `/${newLanguage}${pathWithoutLocale}`
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
} 