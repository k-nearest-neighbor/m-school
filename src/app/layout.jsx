'use client'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { MetaAnalyticsPixel } from '@/components/MetaAnalyticsPixel';

import '@/styles/tailwind.css'
import 'react-image-lightbox/style.css';


import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','200','300','400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

// export const metadata = {
//   title: {
//     template: '%s',
//     default: 'AI Breakout',
//   },
//   description:
//     'Notes on AI Research.',
//   openGraph: {
//     title: "AI Breakout",
//     description:
//       "Notes on AI Research.",
//     images: [
//       {
//         url: "https://www.orchardmontessori.school/main-card-2312.png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "AI Breakout",
//     description:
//       "Notes on AI Research.",
//     images: ["/main-card-2312.png"],
//     creator: "@k_nearest",
//   },
// }
 

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable, poppins.variable)}
      suppressHydrationWarning
    >
      <GoogleAnalytics/>
      <MetaAnalyticsPixel/>
      <body className="flex min-h-full bg-white dark:bg-slate-950">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Analytics/>
      </body>
    </html>
  )
}
