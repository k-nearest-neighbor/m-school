'use client'

import { Fragment } from 'react'
import { Highlight } from 'prism-react-renderer'

import Latex from 'react-latex-next';

export function Fence({ children, language }) {
  if (language.startsWith('latex')) {
    let sizeClass= 'text-xl'; // default
    sizeClass = (language === 'small') ? 'text-sm' : sizeClass;
    sizeClass = (language === '2xl') ? 'text-2xl' : sizeClass;
    sizeClass = (language === '3xl') ? 'text-3xl' : sizeClass;
    // ...
    return (
      <span className={`select-none ${sizeClass} text-black dark:text-white`}>
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
