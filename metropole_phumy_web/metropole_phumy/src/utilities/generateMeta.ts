import type { Metadata } from 'next'

// import type { Media, Page, Config, Sitesetting } from '../payload-types'

import { Media } from '@/types/media'
import { Page } from '@/types/page'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'
import { getCachedGlobal } from './getGlobals'
import { Sitesetting } from '@/types/siteSetting'
import { API_URL } from './constant'


const getImageURL = (image?: Media | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image?.url

    url = ogUrl ? API_URL + ogUrl : API_URL + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page>
}): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage = getImageURL(doc?.openGraph?.image)
  const settingData: Sitesetting = await getCachedGlobal('sitesetting', 'vi')() as unknown as Sitesetting

  const title = doc?.metaTag?.title ? doc?.metaTag?.title : settingData?.title || 'Error ...'


  return {
    description: doc?.metaTag?.description,
    openGraph: mergeOpenGraph({
      description: doc?.metaTag?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
