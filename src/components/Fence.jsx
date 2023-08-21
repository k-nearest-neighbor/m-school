'use client'

import { Fragment } from 'react'
import { Highlight } from 'prism-react-renderer'

import Latex from 'react-latex-next';

export function Fence({ children, language }) {
  if (language.startsWith('latex')) {
    let sizeClass= 'text-xl'; // default
    sizeClass = (language.endsWith('xs')) ? 'text-xs' : sizeClass;
    sizeClass = (language.endsWith('sm')) ? 'text-sm' : sizeClass;
    sizeClass = (language.endsWith('lg')) ? 'text-lg' : sizeClass;
    sizeClass = (language.endsWith('xl')) ? 'text-xl' : sizeClass;
    sizeClass = (language.endsWith('2xl')) ? 'text-2xl' : sizeClass;
    sizeClass = (language.endsWith('3xl')) ? 'text-3xl' : sizeClass;
    sizeClass = (language.endsWith('4xl')) ? 'text-4xl' : sizeClass;
    // ...
    return (
      // <span className={`select-none ${sizeClass} text-black dark:text-white`}>
      <span className={`select-none ${sizeClass} text-black dark:text-sky-400`}>
        <Latex>{children}</Latex>
      </span>
    )
  } else {
    return (
      <Highlight
        code={children.trimEnd()}
        language={language}
        theme={{ plain: {}, styles: [] }}
      >
        {({ className, style, tokens, getTokenProps }) => (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  {'\n'}
                </Fragment>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    )
  }
}
