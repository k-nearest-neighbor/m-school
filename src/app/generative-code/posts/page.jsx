'use client'
import { PostsList } from '@/components/PostsList'

export default function Posts() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>
        <h1 className="ml-0 lg:-ml-2 lg:text-2xl md:text-2xl sm:text-xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Posts
        </h1>
        <div className='mt-16'>
          <PostsList includetags="agents" />
        </div>
      </main>
    </div>
  )
}