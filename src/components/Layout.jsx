'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'



import { navigation } from '@/navigation-and-content'
import { BreakPointDebug } from '@/components/BreakpointDebug';



function Header({ navigation }) {
  let [isScrolled, setIsScrolled] = useState(false);
  let pathname = usePathname();
  let isFaq = pathname === '/faq';

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky select-none top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="mr-6 flex md:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" className="flex align-middle justify-center content-center items-center" aria-label="Home page">         
          <span className="block h-9 w-auto fill-slate-700 dark:fill-sky-100 text-2xl sm:text-3xl font-semibold dark:drop-shadow-logo display-poppins"><span className="">Orchard Montessori</span></span>
          
        </Link>
      </div>
      {/* <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div> */}

    </header>
  )
}

export function Layout({ children }) {



  return (
    <div className="flex w-full flex-col">
      <Header navigation={navigation} />

      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden md:relative md:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800/80 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800/80 dark:block" />
          <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-56 overflow-visible py-4 pl-0.5 pr-0">
            <Navigation navigation={navigation} />
          </div>
        </div>
        {children}
      </div>
      
      <BreakPointDebug />
    
    </div>
  )
}
