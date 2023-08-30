import Link from 'next/link'

export function NextLink({ text, href, replace, scroll, prefetch }) {
  return (
    <Link
      href={href}
      replace={replace ?? false}
      scroll={scroll ?? true}
      prefetch={prefetch ?? true}
    >{text}</Link>
  )
}

export function ALink({ text, href, pwrap=false}) {
  console.log('pwrap is ', pwrap)
  if (pwrap) {
    return (
      <p>
        <a
          href={href}
        >{text}</a>
      </p>
    )
  } else {
  return (
    <a
      href={href}
    >{text}</a>
  )
  }
}
export function CitationRef({ text, href, blue=false, target="_blank", rel="noopener" }) {

  // todo, this blue == false case doesn't work, take blue out or fix it. it's prob not needed
  console.log('blue is ', blue);
  let clsName = (blue === true) ?
      "citationRef text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
      :
      "citationRef text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      // The citationRef tag allows a script to find all the citationRefs to generate the base of a list of citations

  console.log('clsName is ', clsName);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={clsName}
    >{text}</a>
  )
}