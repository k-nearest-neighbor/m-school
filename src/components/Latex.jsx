'use client'
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';




export function LatexComponent({ src }) {
  /*
      For inline latex.
          Demonstrate inline latex: {% latex src="e^+e^-" /%} blah blah.
      No need to add the $'s around the src.
      In fact, make sure you don't add the $'s around the src. Because then
      there will be $$ and it will be treated as a block.
      For block latex, see Fence.jsx. Just do:

      ```latex
      (block of latex)
      ```
  */
  return (
    // <span className="select-none text-black dark:text-white">
    <span className="select-none text-lg text-black dark:text-amber-400">
      <Latex>{'$'+src+'$'}</Latex>
    </span>
  );
}