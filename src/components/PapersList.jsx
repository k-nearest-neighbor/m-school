import { collectPapersWithTags } from '@/navigation-and-content';

import Image from 'next/image'

import dateFormat from "dateformat";

import { BreakPointDebug } from './BreakpointDebug';


export function Paper({paper}) {
  return (
    <article className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl 
        bg-slate-100/70
        group-hover:bg-slate-100
        dark:bg-slate-800/50
          dark:ring-1 dark:ring-slate-300/10
        dark:group-hover:bg-slate-700/50

      ">
      </div>
      <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
        <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2">
        </circle>
      </svg>
      <div className="relative">
        <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
          <span className='mr-3'>📄</span>{paper.title}
        </h3>
        <div className="flex flex-col mt-2 mb-0 prose prose-slate max-w-none dark:prose-invert dark:text-slate-400 ">
        
          { paper.teaseimg  && (
            <Image
              className="mb-0"
              src={paper.teaseimg.src}
              alt={paper.teaseimg.alt}
              width={paper.teaseimg.width}
              height={paper.teaseimg.height}
              unoptimized
              priority
            />
          )}

          <p>
            {paper.excerpt}
          </p>
        
        </div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
        <dt className="sr-only">Date</dt>
        <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
          <time dateTime={paper.authored_date.toISOString()}>{dateFormat(paper.authored_date, "mmmm d, yyyy")}</time>
        </dd>
        </dl>
      </div>
      <a className="flex items-center text-sm text-sky-500 font-medium no-underline w-fit" href={paper.href}>
        <span className="absolute -inset-y-1.5 -inset-x-3 md:-inset-y-3 md:-inset-x-5 sm:rounded-2xl no-underline"></span>
        <span className="relative no-underline">{paper.cited_as} Notes<span className="sr-only">,{' '}{paper.title}</span>
        </span>
        {/* <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"> */}
        <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </a>
    </article>
  )
}

export function PapersList({ includetags, excludetags, showtagpicker }) {
  let includeTags = includetags.split(' ');
  let excludeTags = excludetags ? excludetags.split(' ') : [];  
  let papers = collectPapersWithTags(includeTags, excludeTags)
  
  // group papers by year, then by month
  let papersByPublishYearAndMonth = papers.reduce((acc, paper) => {
    let year = paper.published_date.getFullYear();
    let month = dateFormat(paper.published_date, "mmmm");
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(paper);
    return acc;
  }, {});
  
  // sort years in descending order
  let sortedYearsWithPapers = Object.keys(papersByPublishYearAndMonth).sort((a, b) => b - a);

  const sortedMonths = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]
  
  


  return (
    <>

      {papers.length === 0 && (
        <p>Nothing here yet.</p>
      )}

      {papers.length > 0 && (
        <>
              {/* <BreakPointDebug /> */}
        {sortedYearsWithPapers.map((year) => (
          <div key={year}>
            {/* <h2 className="font-display -ml-3 w-[10.5rem] text-2xl font-light tracking-tight pb-2 border-r  border-r-slate-200">{year}</h2> */}
            <div className="relative">
              <h2 className="font-display ml-0 sm:ml-8 md:ml-14 lg:-ml-2 text-2xl font-light tracking-tight pb-0 xs:pb-0 sm:pb-0 md:pb-0 lg:pb-0 pt-6 xs:pt-2 sm:pt-2 md:pt-2 lg:pt-2">{year}</h2>
              <div className="hidden absolute top-0 bottom-0 h-12  mr-7 sm:left-[calc(0rem+4px)] lg:left-[calc(9.5rem+3px)] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
            </div>
            
            {/* <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div> */}
            {sortedMonths.reverse().map((month) => (
              <div key={month}>
                {papersByPublishYearAndMonth[year][month] && (
                  <>
                      <div className="relative">
                        <h3 className="font-display ml-0 sm:ml-8 md:ml-14 lg:-ml-2 text-xl font-extralight tracking-tight pb-6 xs:pb-6 sm:pb-6 md:pb-6 lg:pb-2 pt-6 xs:pt-6 sm:pt-2 md:pt-2 lg:pt-2">{month}</h3>
                        <div className="hidden absolute top-0 bottom-0 h-20  mr-7 sm:left-[calc(0rem+4px)] lg:left-[calc(9.5rem+3px)] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
                      </div>
                      <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[13rem] max-w-[40rem] sm:max-w-[40rem] md:w-fit lg:w-fit">
                      <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
                        <div className="space-y-16">
                          {papersByPublishYearAndMonth[year][month].map((paper) => (
                            <Paper paper={paper} key={paper.href}/>
                          ))}
                        </div>
                      </div>
                  </>
                )}
              </div>
            ))}
        </div>
        ))}

    </>
  )}
  </>
  )
}