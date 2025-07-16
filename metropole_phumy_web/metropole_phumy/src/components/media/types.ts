import { Media } from '@/types/media'
import type { StaticImageData } from 'next/image'
import type { ElementType, Ref } from 'react'

export interface Props {
  alt?: string
  className?: string
  fill?: boolean // for NextImage only
  htmlElement?: ElementType | null
  imgClassName?: string
  onClick?: () => void
  onLoad?: () => void
  loading?: 'lazy' | 'eager' // for NextImage only
  priority?: boolean // for NextImage only
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>
  resource: Media
  resourceMobile?: Media
  size?: string // for NextImage only
  src?: StaticImageData // for static media
  videoClassName?: string
  poster?: Media
  autoPlay?: boolean
}
