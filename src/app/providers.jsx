'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'

const getForcedTheme = (pathname) =>{  
  // if (pathname == '/about') { return 'light'}
  // if (pathname == '/foo') { return 'dark'}
  return null
}


export function Providers({ children }) {
  let forcedTheme = getForcedTheme(usePathname());
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
