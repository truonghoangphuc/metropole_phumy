'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC<{ className: string }> = (props) => {

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0)
    }
  }, [props.className])

  return <React.Fragment />
}

export default PageClient
