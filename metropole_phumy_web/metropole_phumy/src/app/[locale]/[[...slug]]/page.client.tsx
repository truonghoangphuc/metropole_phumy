'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC<{ className: string, slugAlternate: string }> = (props) => {

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
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const style = document.createElement('style');
      style.innerText = `:root{--removed-body-scroll-bar-size:${scrollbarWidth}px}`;
      style.id = 'tmpStyle';
      document.head.append(style);
      document.documentElement.dataset.alternate = props.slugAlternate;
    }

    return () => {
      const style = document.querySelector('#tmpStyle');
      style?.remove();
    }
  }, [props.className, props.slugAlternate])

  return <React.Fragment />
}

export default PageClient
