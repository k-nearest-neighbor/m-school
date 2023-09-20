'use client'
import { collectAllPostsAndPapers } from '@/navigation-and-content';

import Image from 'next/image'

import dateFormat from "dateformat";

import { Paper } from '@/components/PapersList';
import { Post } from '@/components/PostsList';




export function AllPostsAndPapersList() {

  let posts = collectAllPostsAndPapers()

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
              <div key={post.href}>
                {post.template === 'post' && (
                  <Post post={post}/>
                )}
                {post.template === 'paper' && (
                  <Paper paper={post}/>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  )
}