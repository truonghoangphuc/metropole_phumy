import type { Metadata } from "next";
import { cookies, headers } from "next/headers";

// import { Public_Sans, Barlow } from "next/font/google";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Component";
import { Header } from "@/components/header/Component";
import { Providers } from "@/providers";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "./globals.css";
import qs from "qs";
import { API_URL } from "@/utilities/constant";
import { Media } from "@/types/media";

// const publicSans = Public_Sans({
//   subsets: ["latin"],
//   variable: "--font-publics_san",
// });

// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-barlow",
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Metrpole Phu My",
  description: "Metropole Phu My",
};

export interface SiteData {
  FavIcon?: Media,
  GTM?: string
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  const isSpeedInsight =
    userAgent?.indexOf("Lighthouse") !== -1 ||
    userAgent?.indexOf("PTST") !== -1;

  // Get initial language from cookie or default to 'vi'
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "vi";

  const messages = await getMessages();

  const query = qs.stringify(
    {
      filters: {
        locale: {
          $eq: language,
        },
      },
      populate: ["FavIcon"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`${API_URL}/api/site-setting?${query}`);
  const res = await response.json();
  const siteData:SiteData = res.data as SiteData;



  return (
    <html
      lang={language}
      suppressHydrationWarning
      className={`${inter.variable} dark ${
        isSpeedInsight ? "lighthouse" : ""
      }`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        {siteData &&
        siteData.FavIcon &&
        siteData.FavIcon.url ? (
          <link href={`${API_URL}${siteData.FavIcon.url}`} rel="icon" sizes="16x16" />
        ) : (
          <link href="/favicon.ico" rel="icon" sizes="16x16" />
        )}
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
          <Header locale={language} gtm={siteData.GTM || ''}/>
          <main>{children}</main>
          <Footer locale={language} />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const settingData: Sitesetting = (await getCachedGlobal(
//     "sitesetting",
//     1
//   )()) as Sitesetting;

//   return {
//     metadataBase: new URL(getServerSideURL()),
//     title: settingData?.title || "Luminous CMS",
//     openGraph: mergeOpenGraph(),
//     twitter: {
//       card: "summary_large_image",
//       creator: "@Luminous",
//     },
//   };
// }