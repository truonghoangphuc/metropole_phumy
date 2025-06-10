import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'
import '@/assets/styles/media.css'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  console.log(resource);

  const isVideo =
    typeof resource === "object" && resource?.mime?.includes("video");
  const Tag = (htmlElement as any) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  )
}
