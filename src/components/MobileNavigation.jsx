'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Dialog } from '@headlessui/react'


import { Navigation } from '@/components/Navigation'

function MenuIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  )
}

function CloseOnNavigation({ close }) {
  let pathname = usePathname()
  let searchParams = useSearchParams()

  useEffect(() => {
    close()
  }, [pathname, searchParams, close])

  return null
}

export function MobileNavigation({ navigation }) {
  let [isOpen, setIsOpen] = useState(false)
  let close = useCallback(() => setIsOpen(false), [setIsOpen])

  function onLinkClick(event) {
    let link = event.currentTarget
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-slate-500" />
      </button>
      <Suspense fallback={null}>
        <CloseOnNavigation close={close} />
      </Suspense>
      <Dialog
        open={isOpen}
        onClose={() => close()}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-white px-12 pb-12 pt-8 dark:bg-slate-950 sm:px-6">
          <div className="flex items-center">
            <div className="h-full">
                <button
                  type="button"
                  onClick={() => close()}
                  aria-label="Close navigation"
                >
                  <MenuIcon className="h-6 w-6 stroke-slate-500" />
                </button>
            </div>
            <div className="h-full ml-6">
              <Link href="/" className="" aria-label="Home page">
                {/* <Logomark className="h-9 w-9" /> */}
                <span className="  text-2xl font-semibold drop-shadow-logo">Orchard<br/>Montessori</span>
              </Link>
            </div>
          </div>
          <Navigation
            navigation={navigation}
            className="mt-12 px-1"
            onLinkClick={onLinkClick}
          />
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
