'use client'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox';

export function AttributedImage({ src, caption='', attribution='', attributionHref, annotated=false }) {

  // alt should be the caption or attribution, or both if both are present, or 'figure' if neither are present
  let alt = (caption+attribution !== '') ? caption + ' | ' + attribution : 'figure';

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  
  return (
    <>
    <div className=' max-w-lg mx-auto my-16'>
        <div className='rounded-xl p-2 dark:bg-white border dark:border-none shadow-2xl cursor-zoom-in' onClick={() => setLightboxIsOpen(true)}>
          <Image
            src={src}
            height={700}
            width={700}
            alt={alt}
          />
        </div>
        <div className='flex-col mx-auto'>
            {attribution && (
              <div className='ml-auto mt-1 mb-2  pr-4  text-right text-xs'>
                Image Source: { attributionHref && (<a className='text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-slate-300' href={attributionHref}>{attribution}</a>)}
                        { !attributionHref && (<span>{attribution}</span>)}
                { annotated && (<span>.&nbsp;Annotated.</span>)}
              </div>
            )}
            <div className='text-center text-black dark:font-normal dark:text-white mx-auto max-w-sm'>{caption}</div>
        </div>
      </div>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setLightboxIsOpen(false)}
        />
      )}
    </>
  )
}
