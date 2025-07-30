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
import { SiteData } from "@/types/siteSetting";
import { BlockFormComponent } from "@/components/form/Component";
import { FloatingMenu } from "@/components/floating/Component";

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
      populate: ["FavIcon","FloattingMenu.Items.Icon","GlobalForm.Form.Inputs","GlobalForm.Form.Inputs.Icon","GlobalForm.Form.Setting","GlobalForm.Form.ResolveHeading","GlobalForm.Form.DocumentLogos","GlobalForm.Heading","GlobalForm.SubHeading","GlobalForm.Setting.BackgroundImage","GlobalForm.Setting.BackgroundImageMobile"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const response = await fetch(`${API_URL}/api/site-setting?${query}`);
  const res = await response.json();
  const siteData:SiteData = res.data as SiteData;

  console.log(siteData.GlobalForm);


  return (
    <html
      lang={language}
      suppressHydrationWarning
      className={`${inter.variable} dark ${
        isSpeedInsight ? "lighthouse" : ""
      }`}
    >
      <head>
        <link rel="preconnect" href={API_URL}/>
        <link rel="dns-prefetch" href={API_URL} />
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
          <>
            <link href={`${API_URL}${siteData.FavIcon.url}`} rel="icon" sizes="any" />
            <link rel="apple-touch-icon" href={`${API_URL}${siteData.FavIcon.url}`} type={siteData.FavIcon.mime || 'image/png'} sizes="any"/>
          </>
        ) : <></>}
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
          <Header locale={language} gtm={siteData?.GTM || ''}/>
          <main>
            {children}
            {
              siteData.GlobalForm && (
                <BlockFormComponent {...siteData.GlobalForm} locale={language}/>
              )
            }
            {
              siteData.FloattingMenu && (
                <FloatingMenu {...siteData.FloattingMenu}/>
              )
            }
          </main>
          <Footer locale={language} />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}