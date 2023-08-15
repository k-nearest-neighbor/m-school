'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  return (
    <>
      <Script 
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3CJ6XC4B3C"/>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3CJ6XC4B3C', {
              page_path: window.location.pathname,
            });
          `,
        }}/>
      </>
  )
}