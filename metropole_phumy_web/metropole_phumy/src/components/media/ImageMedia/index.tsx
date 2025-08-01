'use client'

import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/cn'
import NextImage from 'next/image'
import React from 'react'

import type { Props as MediaProps } from '../types'

import { cssVariables } from '@/cssVariables.js'
import { API_URL, rootURL } from '@/utilities/constant'

const { breakpoints, devicepoints } = cssVariables

// A base64 encoded image to use as a placeholder while the image is loading
const placeholderBlur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==';

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    priority,
    resource,
    resourceMobile,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resourceMobile || resource

    width = fullWidth!
    height = fullHeight!
    alt = altFromResource || ''

    src = `${API_URL}${url}`;
  }

  const loading = loadingFromProps || (!priority ? 'lazy' : undefined)

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : resourceMobile
    ? ''
    : Object.entries(breakpoints)
        .map(([, value]) => `(min-width: ${value}px) ${value * 2}w`)
        .join(", ");
  
  const w = (resource.width && resource.width < 1200) ? 1200 : 1920;

  const nextImageURL = `${rootURL}/_next/image?url=${encodeURIComponent(API_URL + resource.url)}&w=${w}&q=100`;

  return (
    <picture>
      {resourceMobile && (
        <source
          srcSet={nextImageURL}
          media={`(min-width: ${breakpoints.md}px)`}
          width={resource.width || width}
          height={resource.height || height}
        />
      )}
      <NextImage
        alt={alt || ""}
        className={cn(imgClassName)}
        fill={fill}
        height={!fill ? height : undefined}
        // placeholder="blur"
        // blurDataURL={placeholderBlur}
        priority={priority}
        quality={100}
        loading={loading}
        {...(sizes ? { sizes: sizes } : {})}
        src={src}
        width={!fill ? width : undefined}
        {...priority ? {fetchPriority: 'high'}:{}}
      />
    </picture>
  );
}
