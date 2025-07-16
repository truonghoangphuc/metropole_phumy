'use client'

import { cn } from '@/utilities/cn'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { API_URL } from '@/utilities/constant'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName, poster, autoPlay } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
      video.addEventListener('playing', () => {
        // console.log('is playing')
        video.classList.add('playing')
      })
      video.addEventListener('pause', () => {
        // console.log('is playing')
        video.classList.remove('playing')
      })
      video.addEventListener('ended', () => {
        // console.log('is playing')
        video.classList.remove('playing')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { url } = resource
    console.log('Poster URL:', poster)
    const posterURL: string = `${API_URL}${poster?.url || ''}`
    return (
      <video
        autoPlay={autoPlay}
        className={cn('video-native w-full', videoClassName)}
        loop
        {...(autoPlay ? { muted: true } : {})}
        onClick={onClick}
        playsInline
        ref={videoRef}
        poster={posterURL}
      >
        <source src={`${API_URL}${url}`} />
      </video>
    );
  }

  return null
}
