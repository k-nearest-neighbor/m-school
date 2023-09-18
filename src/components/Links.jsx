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

export function ALink({ text, href, newtab=false, pwrap=false, bold=false}) {
  let classname = (pwrap) ? 'text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-slate-300' : 'text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-slate-300'
  classname = (bold) ? classname + ' font-semibold' : classname;
  const El = () => (newtab) ? (
        <a className={classname}
          href={href}
          target='_blank'
          rel="noopener"
        >{text}</a>
  ) : (
        <a className={classname}
          href={href}
        >{text}</a>
  );

  if (pwrap) {
    return <p><El/></p>
  } else {
    return <El/>
  }
}
// export function CitationRef({ text, href, blue=false, target="_blank", rel="noopener" }) {
export function CitationRef({ text, href, blue=false }) {

  // todo, this blue == false case doesn't work, take blue out or fix it. it's prob not needed
  // console.log('blue is ', blue);
  let clsName = (blue === true) ?
      "citationRef text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
      :
      "citationRef text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-slate-300"
      // The citationRef tag allows a script to find all the citationRefs to generate the base of a list of citations

  // console.log('clsName is ', clsName);

  return (
    <a
      href={href}
      className={clsName}
    >{text}</a>
  )
}