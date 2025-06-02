'use client'

import React from 'react'

import { LanguageProvider } from './Language'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
      <LanguageProvider initialLanguage={'vi'}>{children}</LanguageProvider>
  )
}
