import type { Metadata } from "next";

// import { draftMode } from "next/headers";
import React, { cache } from "react";
import { generateMeta } from "@/utilities/generateMeta";
import PageClient from "./page.client";

import type { Page as PageType } from "@/types/page";
import { getPageBySlug } from "@/services/page-service";
import { RenderBlocks } from "@/components/RenderBlocks";

type Args = {
  params: Promise<{
    slug?: string[];
    locale?: "vi" | "en";
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "homepage", locale = "vi" } = await paramsPromise;
  const pageSlug = Array.isArray(slug)
    ? slug.toString().split(",").join("/")
    : slug;

  // ignore devtools
  if (pageSlug.includes("com.chrome.devtools.json")) {
    return null;
  }

  const page: PageType | null = await queryPageBySlug({
    slug: pageSlug,
    locale,
  });

  const { layout } = page || {};
  return (
    <>
      <PageClient />
      <RenderBlocks blocks={layout} locale={locale} />
    </>
  );
}

export async function generateMetadata({params: paramsPromise}: Args): Promise<Metadata> {
  const { slug = "homepage", locale = "vi" } = await paramsPromise;
  // const page = await queryPageBySlug({
  //   slug,
  // })

  const pageSlug = Array.isArray(slug)
    ? slug.toString().split(",").join("/")
    : slug;
  const page = await queryPageBySlug({
    slug: pageSlug,
    locale,
  });

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(
  async ({ slug, locale = "vi" }: { slug: string; locale?: "vi" | "en" }) => {
    
    const result = getPageBySlug(slug, locale);

    return result || null;
  }
);
