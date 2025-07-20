'use client'

import Script from 'next/script'

export default function TrackingHead(props: { gtm: string; ga: string }) {
  return props.gtm !== '' ? (
    <Script id="trackingScript" strategy="afterInteractive">
      {`const userStartActive = () => {if(!document.body.classList.contains('interactive')) {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${props.gtm}');document.body.classList.add('interactive');}};if (!document.body.classList.contains('interactive')) {document.addEventListener('mousedown', userStartActive);document.addEventListener('mousemove', userStartActive);document.addEventListener('touchstart', userStartActive);document.addEventListener('scroll', userStartActive);document.addEventListener('keydown', userStartActive);}`}
    </Script>
  ) : (
    props.ga && (
      <>
        <Script id="trackingScript" strategy="afterInteractive">
          {`const userStartActive = () => {if(!document.body.classList.contains('interactive')) {(function (w, d, s, l, i) {var f = d.getElementsByTagName(s)[0],j = d.createElement(s);j.async = true;j.src = "https://www.googletagmanager.com/gtag/js?id=" + i;f.parentNode.insertBefore(j, f);})(window, document, "script", "dataLayer", "${props.ga}");window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${props.ga}");document.body.classList.add('interactive');}};if (!document.body.classList.contains('interactive')) {document.addEventListener('mousedown', userStartActive);document.addEventListener('mousemove', userStartActive);document.addEventListener('touchstart', userStartActive);document.addEventListener('scroll', userStartActive);document.addEventListener('keydown', userStartActive);}`}
        </Script>
      </>
    )
  )
}
