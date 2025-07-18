import type { Metadata } from "next";
import { cookies, headers } from "next/headers";

// import { Public_Sans, Barlow } from "next/font/google";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Component";
import { Header } from "@/components/header/Component";
import { Providers } from "@/providers";

import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
      </head>
      <body>
        <Providers>
          <Header locale={language} />
          <main>{children}</main>
          <Footer locale={language} />
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