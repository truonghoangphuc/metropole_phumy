import type { Metadata } from 'next'

// import type { Media, Page, Config, Sitesetting } from '../payload-types'

import { Media } from '@/types/media'
import { Page } from '@/types/page'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'
// import { getCachedGlobal } from './getGlobals'
// import { SiteData } from '@/types/siteSetting'
import { API_URL, rootURL } from './constant'


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
  doc: Partial<Page>,
  locale: string
}): Promise<Metadata> => {
  const { doc, locale } = args || {}

  const ogImage = getImageURL(doc?.openGraph?.image)
  // const settingData: SiteData = (await getCachedGlobal(
  //   "sitesetting",
  //   "vi"
  // )()) as unknown as SiteData;

  const title = doc?.metaTag?.title ? doc?.metaTag?.title : 'Metropole Phu My'

  const languages = {
    'vi': '',
    'en': ''
  };

  if (locale === 'vi') {
    languages.vi = `${rootURL}/vi${doc.slug === 'homepage' ? '' : ('/'+doc.slug)}`;
    languages.en = `${rootURL}/en${doc.slugAlternate ? '/' + doc.slugAlternate : ""}`;
  } else {
    languages.en = `${rootURL}/en${doc.slug === "homepage" ? "" : ('/'+doc.slug)}`;
    languages.vi = `${rootURL}/vi${doc.slugAlternate ? '/' + doc.slugAlternate : ""}`;
  }  

  return {
    description: doc?.metaTag?.description,
    alternates: {
      languages: languages,
    },
    openGraph: mergeOpenGraph({
      description: doc?.metaTag?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: `${rootURL}/${locale}/${
        Array.isArray(doc?.slug)
          ? doc?.slug.join("/")
          : doc.slug === "homepage"
          ? ""
          : doc.slug
      }`,
    }),
    title,
  };
}
