import { unstable_cache } from 'next/cache'

export type Locale = 'en' | 'vi' | 'all'


const URL_API = process.env.API_DOMAIN;

async function getGlobal(slug: string, locale?: Locale) {

  const data = await fetch(`${URL_API}/api/${slug}?locale=${locale}`)

  return data;
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: string, locale?: Locale) =>
  unstable_cache(async () => getGlobal(slug, locale), [slug], {
    tags: [`global_${slug}`],
  })
