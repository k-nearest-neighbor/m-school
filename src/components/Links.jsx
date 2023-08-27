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

export function ALink({ text, href, target="_blank", rel="noopener" }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
    >{text}</a>
  )
}
