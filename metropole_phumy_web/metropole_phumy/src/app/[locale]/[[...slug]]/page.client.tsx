'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC<{ className: string }> = (props) => {

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
      document.documentElement.classList.add('loaded');
      document.addEventListener('copy', function(e) {
        e.preventDefault(); // Prevent the default copy action
      });

      document.addEventListener('cut', function(e) {
        e.preventDefault(); // Prevent the default cut action
      });

      document.addEventListener('paste', function(e) {
        e.preventDefault(); // Prevent the default paste action
      });

      document.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Prevent the default right-click context menu
      });
    }
  }, [props.className])

  return <React.Fragment />
}

export default PageClient
