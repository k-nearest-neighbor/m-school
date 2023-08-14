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

export function DocsLayout({ children, frontmatter: { title }, ast }) {
  let tableOfContents = collectHeadings(ast.children)

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
}

/*
  Some notes on trying to get h4s to work in the table of contents:
    I don't understand why but h4s are put at the same level as h3s.
    It could be a problem with the loop above, but it seems good.
    There is this: https://github.com/mkdocs/mkdocs/issues/278
    See also https://markdoc.dev/docs/examples#table-of-contents
*/