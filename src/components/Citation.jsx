export function Citation({
  expand=false,
  shortname, //this should be like grealy2023onewordtitleabreviation
  title,
  year,
  month,
  url,
}) {

  return (
    <div className="w-full flex flex-col">
      <h4 className='text-xl font-semibold font-display'>Citation</h4>
      <blockquote className="dark:prose-invert dark:text-slate-400">
          Grealy, Desmond. ({month} {year}). {title}. AI Breakout. {url}
      </blockquote>
      
      <pre>
{`@article{${shortname},
  title   = "${title}",
  author  = "Grealy, Desmond",
  journal = "ai-breakout.com",
  year    = "${year}",
  month   = "${month}",
  url     = "${url}"
}`}
      </pre>
    </div>
  )
}


export function References({}) {

  return (
      <h4 className='mb-8 text-xl font-semibold font-display'>References</h4>
  )
}