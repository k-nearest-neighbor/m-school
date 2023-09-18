'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'


import { useEffect } from 'react'

const getForcedTheme = (pathname) =>{  
  // if (pathname == '/about') { return 'light'}
  // if (pathname == '/foo') { return 'dark'}
  return null
}


export function Providers({ children }) {
  let forcedTheme = getForcedTheme(usePathname());


  // Some kind of bullshit bug with next where it doesn't scroll to the top on navigation
  // for mobile only, and only for the mobile navigation links.
  // maybe something to do with the fact that they have a onClick handler?
  // Definitely a nextjs bug, but this fixes it.
  // I'm doing the scroll top here because this is a 'use client' component
  // I'm a bit unclear on the implications of doing 'use client' at the layout level where this is imported
  // but doing it here won't make anything worse that it is since this is already 'use client'
  // the docs are slightly unclear on if this will force everything inside <Providers> to be 'use client' though.
  // https://github.com/vercel/next.js/discussions/43153
  // Never mind, I think this is fine. leaving the note though.
  useEffect(() => {
      window.navigation.addEventListener('navigate', (event) => {
        if (event.destination.url.includes('#')) return; // don't for anchor navigation
        if (process.env.NODE_ENV !== 'production') return; // For dev it's annoying to force scroll to top when the development reload happens
        window.setTimeout(()=>{
            window.scrollTo(0, 0)
          }, 100) //can you believe this shit. 0 or 1 do not work. 100 is enough I guess
      } )
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='dark'
      forcedTheme={forcedTheme}
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
