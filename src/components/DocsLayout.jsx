import Link from 'next/link'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'
import { Balancer } from 'react-wrap-balancer'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (child.type === 'text') {
      text += child.attributes.content
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (
      node.type === 'heading' &&
      (node.attributes.level === 2 || node.attributes.level === 3 || node.attributes.level === 4)
    ) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        // if (node.attributes.level === 3) {
        if (node.attributes.level > 2) {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
            children: [],
            level: node.attributes.level,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export function DocsLayout({ children, frontmatter: {
                                                title,
                                                nickname,
                                                template,
                                                authors,
                                                cited_as,
                                                source,
                                                published_date,
                                                composed_date,
                                                updated_date,
                                                time_to_read,
                                                tags }, ast }) {
  let tableOfContents = collectHeadings(ast.children)
  let templateName = template ?? 'post';
  
  if (templateName === 'post') {
    return (
      <>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <DocsHeader title={title} />
            
            <p className='prose prose-slate max-w-none dark:prose-invert text-slate-400 dark:text-slate-500 mb-8'>
              {composed_date}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
              {updated_date && (<span>updated {updated_date}{' '}&bull;{' '}</span>)}
              <Link className="text-slate-400 dark:text-slate-500 underline" href="/faq">Desmond Grealy</Link>
              {time_to_read && (<span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;{time_to_read}</span>)}
            </p>

            <Prose>{children}</Prose>
          </article>
          {/* <PrevNextLinks /> */}
        </div>
        <TableOfContents tableOfContents={tableOfContents} />
      </>
    )

  } else if (templateName === 'content') {
      return (
        <>
          <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
            <article>
              <DocsHeader title={title} />
              <Prose>{children}</Prose>
            </article>
            {/* <PrevNextLinks /> */}
          </div>
          <TableOfContents tableOfContents={tableOfContents} />
        </>
      )

  } else if (templateName === 'paper') {
    return (
      <>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <header className="mb-9 space-y-1">
              {/* <p className="font-display mb-4 text-center text-sm font-medium text-slate-900 dark:text-slate-300">
                RESEARCH PAPER NOTES
              </p> */}


              {/* <div className="px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800/60"> */}

              <div className="px-4 py-2 group relative rounded-3xl border border-slate-200 dark:border-slate-800 dark:bg-slate-800/60 max-w-[42rem] mx-auto">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent  
                    [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.slate.50)),var(--quick-links-hover-bg,theme(colors.slate.100)))_padding-box,linear-gradient(to_top,theme(colors.blue.500),theme(colors.cyan.500),theme(colors.sky.600))_border-box] 
                    dark:[--quick-links-hover-bg:theme(colors.slate.900)]" />
                  <div className="relative overflow-hidden rounded-xl px-4 py-2">
                    <h1 className="font-display text-2xl font-light tracking-tight pb-2">
                      <Balancer>{title}</Balancer>
                    </h1>
                  <h2 className="font-display font-light tracking-tight pb-8 text-slate-600 dark:text-slate-300">
                    {/* Known as:  {nickname && (<span>&#34;{nickname}&#34; /{' '}</span>)}{cited_as} */}
                    
                    {nickname && (<span><span className="text-slate-400">&#34;</span>{nickname}<span className="text-slate-400">&#34;</span></span>)}
                    <br/>
                    {cited_as && (<span><span className="text-slate-400">&#34;</span>{cited_as}<span className="text-slate-400">&#34;</span></span>)}
                    
                    
                  </h2>
                  <p className="font-display text-sm text-slate-900 dark:text-white py-1">
                    {/* <b>Published:</b>{' '} */}
                    <span className="font-light">Published {published_date}</span>
                  </p>
                  <p className="font-display text-sm text-slate-900 dark:text-white py-1">
                    {/* <b>Paper:</b>{' '} */}
                    <Link
                      href={source}
                      target="_blank"
                      className="mt-8 text-sm font-base text-sky-500"
                    >
                      {source}
                    </Link>
                  </p>
                  {/* <p className="font-display text-sm text-slate-900 dark:text-white">
                    <b>Cited As:</b>{' '}
                    <span className="font-light">{cited_as} / {nickname}</span>
                  </p> */}
                  <p className="font-display text-sm text-black dark:text-white py-1">
                    {/* <b>Paper Authors:</b>{' '} */}
                    <span className="font-light italic">{authors}</span>
                  </p>
                  {{tags} && (
                      <div className="flex pt-6 w-full flex-wrap">
                        {tags.map((tag) => (
                          <div key={tag} className="inline-block bg-slate-300 dark:bg-slate-950/50 rounded-full px-3 py-1 text-sm font-semibold text-xs text-sky-700 dark:text-slate-100 mr-2 mb-2 dark:border-slate-600 dark:border-[1px] whitespace-nowrap">
                            {tag}
                          </div>
                        ))}
                      </div>
                  )}
                </div>
              </div>

              {/* <hr className="border-1 dark:border-slate-800"/> */}
              <p className="text-sm text-center text-slate-900 dark:text-white pt-6">
                <b>Notes from{' '}
                <span className="">{composed_date}</span>
                </b>
                { updated_date && (
                  <>
                    <br/><b>Updated:</b>{' '}
                    <span className="">{updated_date}</span>
                  </>
                )}
                <br/>
                <span className="prose prose-slate max-w-none dark:prose-invert dark:text-slate-400">Desmond Grealy</span>
              </p>

            </header>

            <Prose>{children}</Prose>
          </article>
          {/* <PrevNextLinks /> */}
        </div>
        <TableOfContents tableOfContents={tableOfContents} />
      </>
    )
  }
}

/*

  Some notes on trying to get h4s to work in the table of contents:
    I don't understand why but h4s are put at the same level as h3s.
    It could be a problem with the loop above, but it seems good.
    There is this: https://github.com/mkdocs/mkdocs/issues/278
    See also https://markdoc.dev/docs/examples#table-of-contents
*/