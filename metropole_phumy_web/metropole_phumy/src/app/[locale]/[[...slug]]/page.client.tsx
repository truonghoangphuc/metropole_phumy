'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0)
    }
  }, [])

  return <React.Fragment />
}

export default PageClient
