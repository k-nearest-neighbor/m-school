import Image from 'next/image'

export function AttributedImage({ src, alt, caption, attribution, attributionHref }) {

  return (
    <div className='flex flex-col w-fit h-fit mx-auto rounded-xl p-2 dark:bg-white'>
      <Image
        src={src}
        width={700}
        height={700}
        alt="Picture of the author"
      />
    </div>
  )
}
