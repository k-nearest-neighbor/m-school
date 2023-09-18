import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // links
        'prose-a:font-base prose-a:text-sky-500 dark:prose-a:text-sky-400',
        // link underline
        // 'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        'prose-a:no-underline ',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-blue-950/90 prose-hr:h-[0.1px]',
        // ul
        'prose-ul:my-0 prose-ul:pl-0 prose-ul:space-y-0 prose-ul:ml-12 prose-ul:list-disc prose-ul:list-outside',

        'prose-strong:font-bold prose-strong:text-slate-950 dark:prose-strong:text-white',

        // ol
        'prose-ol:my-0 prose-ol:pl-0 prose-ol:list-none prose-ol:space-y-0 prose-ol:ml-0  prose-ol:list-outside',
        
        // prose-blockquote
        'prose-blockquote:dark:text-blue-200 prose-blockquote:font-normal'
      )}
      {...props}
    />
  )
}
