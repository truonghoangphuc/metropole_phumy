'use client'
import React, { useEffect, useState } from 'react'
import TrackingHead from './tracking'

const HeaderClient: React.FC<{gtm:string}> = ({gtm}) => {
  const [scrollDir, setScrollDir] = useState(0)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.scrollY
    let ticking = false
    const header = document.querySelector('.main-header');

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled')

          if (scrollY > 200) {
            if (scrollY > lastScrollY) {
              header.classList.remove('scrolled-up')
              header.classList.add('scrolled-down')
            } else {
              header.classList.remove('scrolled-down')
              header.classList.add('scrolled-up')
            }
          }
        } else {
          header.classList.remove('scrolled')
        }
      }

      setScrollDir(scrollY > lastScrollY ? 0 : 1)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return <>
    {
      gtm && <TrackingHead gtm={gtm} ga={''}></TrackingHead>
    }
  </>
}

export default HeaderClient
