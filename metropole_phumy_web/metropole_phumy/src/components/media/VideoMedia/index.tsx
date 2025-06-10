'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { API_URL } from '@/utilities/constant'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { url } = resource
    return (
      <video
        autoPlay
        className={cn("video-native w-full", videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${API_URL}${url}`} />
      </video>
    );
  }

  return null
}
