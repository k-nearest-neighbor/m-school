import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1 className="mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white">
          404
        </h1>
      </div>
    </div>
  )
}
