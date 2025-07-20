'use client'
import React, { useEffect } from 'react'
import TrackingHead from './tracking'

const HeaderClient: React.FC<{gtm:string}> = ({gtm}) => {

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

  return <>
    {
      gtm && <TrackingHead gtm={gtm} ga={''}></TrackingHead>
    }
  </>
}

export default HeaderClient
