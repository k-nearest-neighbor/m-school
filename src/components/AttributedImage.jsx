import Image from 'next/image'

export function AttributedImage({ src, caption='', attribution='', attributionHref }) {

  // alt should be the caption or attribution, or both if both are present, or 'figure' if neither are present
  let alt = (caption+attribution !== '') ? caption + ' | ' + attribution : 'figure';

  // return (
  //   <>
  //   <div className='w-fit h-fit  scale-75 -my-16 sm:-my-24'>
  //       <div className='w-fit h-fit mx-auto rounded-xl p-2  lg:-mt-4 dark:bg-white  '>
  //         <Image
  //           src={src}
  //           width={700}
  //           height={700}
  //           alt={alt}
  //         />
  //       </div>
  //       <div className='flex-col'>
  //           {attribution && (
  //             <div className='ml-auto mt-1 pr-4  text-right text-sm'>
  //               Image Source: { attributionHref && (<a href={attributionHref} target="_blank">{attribution}</a>)}
  //                       { !attributionHref && (<span>{attribution}</span>)}
  //             </div>
  //           )}
  //           <div className='text-center text-xl dark:text-white mx-auto w-[24rem] md:w-[40rem] lg:w-[40rem] xl:w-[40rem]'>{caption}</div>
  //       </div>
  //     </div>
  //   </>
  // )

  return (
    <>
    <div className=' max-w-lg mx-auto my-16'>
        <div className='rounded-xl p-2 dark:bg-white border dark:border-none shadow-2xl'>
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
                Image Source: { attributionHref && (<a href={attributionHref} target="_blank">{attribution}</a>)}
                        { !attributionHref && (<span>{attribution}</span>)}
              </div>
            )}
            <div className='text-center text-black dark:font-normal dark:text-white mx-auto max-w-sm'>{caption}</div>
        </div>
      </div>
    </>
  )
}
