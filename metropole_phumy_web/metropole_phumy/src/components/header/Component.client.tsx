'use client'
import React, { useEffect } from 'react'

const HeaderClient: React.FC = () => {

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header')
        if (!header) return

        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      })
    }
  }, [])

  return <React.Fragment />
}

export default HeaderClient
