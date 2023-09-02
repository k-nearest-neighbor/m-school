import { collectPostsWithTags } from '@/navigation-and-content';

import Image from 'next/image'

import dateFormat from "dateformat";


export function Post({post}) {
  return (
    <article className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl 
        
        bg-slate-100/70
        group-hover:bg-slate-200/50
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
          {post.title}
        </h3>
        <div className="flex flex-col mt-2 mb-4 prose prose-slate max-w-none dark:prose-invert dark:text-slate-400 ">
        
          { post.teaseimg  && (
            <Image
              className="mb-0"
              src={post.teaseimg.src}
              alt={post.teaseimg.alt}
              width={post.teaseimg.width}
              height={post.teaseimg.height}
              unoptimized
              priority
            />
          )}

          <p>
            {post.excerpt}
          </p>
        
        </div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
        <dt className="sr-only">Date</dt>
        <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
          <time dateTime={post.authored_date.toISOString()}>{dateFormat(post.authored_date, "mmmm d, yyyy")}</time>
        </dd>
        </dl>
      </div>
      <a className="flex items-center text-sm text-sky-500 font-medium no-underline w-fit" href={post.href}>
        <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl no-underline"></span>
        <span className="relative no-underline">Read more<span className="sr-only">,{' '}{post.title}</span>
        </span>
        {/* <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"> */}
        <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </a>
    </article>
  )
}

export function PostsList({ includetags, excludetags, showtagpicker }) {
  let includeTags = includetags.split(' ');
  let excludeTags = excludetags ? excludetags.split(' ') : [];  
  let posts = collectPostsWithTags(includeTags, excludeTags)

  return (
    <>
      {posts.length === 0 && (
        <p>Nothing here yet.</p>
      )}

      {posts.length > 0 && (
        <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[13rem] max-w-[40rem]">

          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
          
          <div className="space-y-16">
            {posts.map((post) => (
              <Post post={post} key={post.href}/>
            ))}
          </div>
        </div>
      )}

    </>
  )
}