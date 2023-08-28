import Link from 'next/link'

import { slugifyWithCounter } from '@sindresorhus/slugify'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'

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
                                                notes_composed_date,
                                                notes_updated_date,
                                                tags }, ast }) {
  let tableOfContents = collectHeadings(ast.children)
  let templateName = template ?? 'default';
  
  if (templateName === 'default') {
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
              <p className="font-display text-center text-sm font-medium text-slate-900 dark:text-slate-300">
                RESEARCH PAPER NOTES
              </p>
              <h1 className="font-display text-2xl font-bold tracking-tight pb-2">
                {title}
              </h1>
              <h2 className="font-display font-semibold tracking-tight pb-8">
                {nickname && (<span>&#34;{nickname}&#34; /{' '}</span>)}{cited_as}
              </h2>
              <p className="font-display text-sm text-slate-900 dark:text-white">
                <b>Published:</b>{' '}
                <span className="font-light">{published_date}</span>
              </p>
              <p className="font-display text-sm text-slate-900 dark:text-white">
                <b>Paper:</b>{' '}
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
              <p className="font-display text-sm text-slate-900 dark:text-white line-clamp-1">
                <b>Paper Authors:</b>{' '}
                <span className="font-light italic">{authors}</span>
              </p>

              {{tags} && (
                  <div className="flex py-6">
                    {tags.map((tag) => (
                      <div key={tag} className="inline-block bg-slate-300 dark:bg-sky-100 rounded-full px-3 py-1 text-sm font-semibold text-xs text-sky-700 mr-2 mb-2">
                        {tag}
                      </div>
                    ))}
                  </div>
              )}
              <hr className="border-1 dark:border-slate-800"/>
              <p className="font-display text-sm text-right text-slate-900 dark:text-white">
                <b>Notes Created:</b>{' '}
                <span className="font-light">{notes_composed_date}</span>
                { notes_updated_date && (
                  <>
                    <br/><b>Updated:</b>{' '}
                    <span className="font-light">{notes_updated_date}</span>
                  </>
                )}
                <br/>
                <span className="font-light">Desmond Grealy</span>
              </p>
              <hr className="border-1 dark:border-slate-800"/>
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