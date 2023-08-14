'use client'
import { PostsList } from '@/components/PostsList'

export default function Posts() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>
        {/* <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Welcome
        </h1>
        <p className="mt-8">
          This is both a blog and a notebook of information on the topic of Machine Learning and Artificial Intelligence
        </p> */}
        {/* <h2 className="mt-4 lg:text-2xl md:text-lg sm:text-lg text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
          All Serialized Posts
        </h2> */}
        <div className='mt-16'>
          <PostsList includetags="ability alignment agents models mech-interp" />
        </div>
      </main>
    </div>
  )
}