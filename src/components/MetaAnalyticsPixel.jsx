'use client';

import Script from 'next/script';

export function MetaAnalyticsPixel() {
  if (process.env.NODE_ENV !== 'production') return null;
  return (
    <>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '283075394698952');
              fbq('track', 'PageView');
          `,
        }}/>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=283075394698952&ev=PageView&noscript=1"/>
      </noscript>
    </>
  )
}