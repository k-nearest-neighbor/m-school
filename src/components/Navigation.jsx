import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import clsx from 'clsx'


export function Navigation({ navigation, className, onLinkClick }) {
  let pathname = usePathname()

  // dev feature to show or hide all the items in navigation use this to turn it on or off:
  let [devShowAll, setDevShowAll] = useState(false);
  useEffect(()=>{
    if (typeof window !== "undefined") {
      setDevShowAll(JSON.parse(localStorage.getItem('devShowAll') || false));
      window.devShowAllTrue = () =>{
        localStorage.setItem('devShowAll', true);
      }
      window.devShowAllFalse = () =>{
        localStorage.setItem('devShowAll', false);
      }
    }
  }, [devShowAll, setDevShowAll])


  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">

        {navigation
          .filter((section) => devShowAll || !section.hide)
          .map((section) => (
            <li key={section.title}>
              <h2 className="font-display font-medium text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <ul
                role="list"
                className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
              >
                {section.links
                        .filter((link) => devShowAll || !link.hide)
                        .map((link) => (
                  <li key={link.href} className="relative cusor-pointer">
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      scroll={true}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-[6px] before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full line-clamp-1',
                        link.href === pathname
                          ? 'font-semibold text-sky-500 before:bg-sky-500'
                          : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                      )}
                    >
                      {/* <span className="line-clamp-1">{(link.template ==='paper') && (<span>📋{' '}</span>)}{link.title}</span> */}
                      <span className="line-clamp-1 text-2xl">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
        ))}
      </ul>
    </nav>
  )
}
