import { getPages } from "@/services/page-service";
import { getServerSideSitemap } from "next-sitemap";
import { unstable_cache } from "next/cache";

const getPagesSitemap = unstable_cache(
  async () => {
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL || "https://metropolephumy.com";

    const results = await getPages();

    console.log(results)

    const dateFallback = new Date().toISOString();

    const sitemap = results
      ? results
          .filter((page) => Boolean(page?.slug))
          .map((page) => {
            return {
              loc:
                page?.slug === "homepage"
                  ? `${SITE_URL}/`
                  : `${SITE_URL}/${page?.slug}`,
              lastmod: page.updatedAt || dateFallback,
            };
          })
      : [];

    return sitemap;
  },
  ["sitemap"],
  {
    tags: ["sitemap"],
  }
);

export async function GET() {
  const sitemap = await getPagesSitemap();
  return getServerSideSitemap(sitemap);
}
