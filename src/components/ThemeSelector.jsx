import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

function LightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}



function DarkIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

function SystemIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  )
}

export function ThemeSelector(props) {
  let { theme, setTheme } = useTheme()
  let [mounted, setMounted] = useState(false)

  let pathname = usePathname()

  const setLight = () => {
    setTheme('light');
  }
  const setDark = () => {
    setTheme('dark');
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-5 w-5" />
  }

  // if (pathname == '/faq') { // forced to light mode there
  //   return null;
  // }
  
  return (
    <>
        <LightIcon
          className={clsx(
            'hidden h-5 w-5 mt-1 dark:block cursor-pointer hover:fill-sky-200',
            theme === 'light' ? 'fill-slate-400' : 'fill-sky-400'
          )}
          onClick={setLight}
        />
        {/* <DarkIcon
          className={clsx(
            'h-4 w-4 dark:hidden',
            theme === 'dark' ? 'fill-slate-400' : 'fill-sky-400'
          )}
          onClick={setDark}
        /> */}

        <MoonIcon
          className={clsx(
            'h-5 w-5 mt-1 dark:hidden cursor-pointer hover:stroke-sky-500 hover:fill-sky-500',
            theme === 'dark' ? 'stroke-slate-400' : 'stroke-sky-400'
          )}
          onClick={setDark}
        />
    </>
    // <Listbox as="div" value={theme} onChange={setTheme} {...props}>
    //   <Listbox.Label className="sr-only">Theme</Listbox.Label>
    //   <Listbox.Button
    //     className="flex h-6 w-6 items-center justify-center rounded-lg
    //               "
    //     aria-label="Theme"
    //   >
    //     <LightIcon
    //       className={clsx(
    //         'h-4 w-4 dark:hidden',
    //         theme === 'system' ? 'fill-slate-400' : 'fill-sky-400'
    //       )}
    //     />
    //     <DarkIcon
    //       className={clsx(
    //         'hidden h-4 w-4 dark:block',
    //         theme === 'system' ? 'fill-slate-400' : 'fill-sky-400'
    //       )}
    //     />
    //   </Listbox.Button>
    //   <Listbox.Options className="absolute left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
    //     {themes.map((theme) => (
    //       <Listbox.Option
    //         key={theme.value}
    //         value={theme.value}
    //         className={({ active, selected }) =>
    //           clsx(
    //             'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
    //             {
    //               'text-sky-500': selected,
    //               'text-slate-900 dark:text-white': active && !selected,
    //               'text-slate-700 dark:text-slate-400': !active && !selected,
    //               'bg-slate-100 dark:bg-slate-900/40': active,
    //             }
    //           )
    //         }
    //       >
    //         {({ selected }) => (
    //           <>
    //             <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
    //               <theme.icon
    //                 className={clsx(
    //                   'h-4 w-4',
    //                   selected
    //                     ? 'fill-sky-400 dark:fill-sky-400'
    //                     : 'fill-slate-400'
    //                 )}
    //               />
    //             </div>
    //             <div className="ml-3">{theme.name}</div>
    //           </>
    //         )}
    //       </Listbox.Option>
    //     ))}
    //   </Listbox.Options>
    // </Listbox>
  )
}
