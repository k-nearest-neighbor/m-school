'use client'
import { PapersList } from '@/components/PapersList'

export default function Papers() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>
        <h1 className="ml-0 lg:-ml-2 lg:text-2xl md:text-2xl sm:text-xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Papers on AI Agents and AI Coding
        </h1>
        <div className='mt-16'>
          <PapersList includetags="agents ai-coding" />
        </div>
      </main>
    </div>
  )
}