'use client'
import { PostsList } from '@/components/PostsList'

export default function Posts() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>
        <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Posts on Mechanistic Interpretability
        </h1>
        <div className='mt-16'>
          <PostsList includetags="mech-interp" />
        </div>
      </main>
    </div>
  )
}