


export function YoutubeEmbed({
    vid,
    tparam,
    caption1=null,
    caption1Align='center',
    caption2=null,
    caption2Align='center',
    caption3=null,
    caption3Align='center',
    caption4=null,
    caption4Align='center',
    caption5=null,
    caption5Align='center',
}) {
  const startParam = tparam ? `start=${tparam}&` : '';
  const caption1AlignClass = caption1Align === 'center' ? 'text-center' : caption1Align === 'left' ? 'text-left' : 'text-right';
  const caption2AlignClass = caption2Align === 'center' ? 'text-center' : caption2Align === 'left' ? 'text-left' : 'text-right';
  const caption3AlignClass = caption3Align === 'center' ? 'text-center' : caption3Align === 'left' ? 'text-left' : 'text-right';
  const caption4AlignClass = caption4Align === 'center' ? 'text-center' : caption4Align === 'left' ? 'text-left' : 'text-right';
  const caption5AlignClass = caption5Align === 'center' ? 'text-center' : caption5Align === 'left' ? 'text-left' : 'text-right';

  return (
    <div className="my-12 w-full flex flex-col">
      <div className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
        <iframe
          width="321"
          src={`https://www.youtube.com/embed/${vid}?${startParam}hd=1&iv_load_policy=3`}
          title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>
      <div className="max-w-sm mx-auto">
        {caption1 && (
          <div className={`mt-4 ${caption1AlignClass} text-black dark:font-normal dark:text-white`}>{caption1}</div>
        )}
        {caption2 && (
          <div className={`mt-2 pl-10 ${caption2AlignClass} text-black dark:font-normal dark:text-white`}>{caption2}</div>
        )}
        {caption3 && (
          <div className={`mt-0 pl-10 ${caption3AlignClass} text-black dark:font-normal dark:text-white`}>{caption3}</div>
        )}
        {caption4 && (
          <div className={`mt-0 pl-10 ${caption4AlignClass} text-black dark:font-normal dark:text-white`}>{caption4}</div>
        )}
        {caption5 && (
          <div className={`mt-0 pl-10 ${caption5AlignClass} text-black dark:font-normal dark:text-white`}>{caption5}</div>
        )}
      </div>

    </div>
  )
}


export function YoutubeEmbedGrid({vids}) {
  let vidIds = vids.split(' ');
  return (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
    {vidIds.map((vid) => (
      <div key={vid} className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
        <iframe
          // className="my-4"
          width="321"
          src={`https://www.youtube.com/embed/${vid}?hd=1&iv_load_policy=3`}
          title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>
    ))}
  </div>

  )
}

export function lsEmbed(){

  return (
<div className="mx-auto">
  <iframe
    id="embedPlayer"
    src="https://embed.podcasts.apple.com/us/podcast/latent-space-the-ai-engineer-podcast-codegen-agents/id1674008350?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light&amp;ct=ai-breakout.com"
    height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    allow="autoplay *; encrypted-media *; clipboard-write"
    style={{
      width: "100%",
      maxWidth: "660px",
      overflow: "hidden",
      borderRadius: "12px",
      transform: "translateZ(0px)",
      animation: "2s ease 0s 6 normal none running loading-indicator",
    }}>
  </iframe>
</div>
  )
  }

export function arxpEmbed(){
  return (
  <iframe
    id="embedPlayer"
    src="https://embed.podcasts.apple.com/us/podcast/axrp-the-ai-x-risk-research-podcast/id1544393261?itsct=podcast_box_player&amp;itscg=30200&amp;ct=ai-breakout.com&amp;ls=1&amp;theme=light"
    height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    allow="autoplay *; encrypted-media *; clipboard-write"
    style={{
      width: "100%",
      maxWidth: "660px",
      overflow: "hidden",
      borderRadius: "12px",
      transform: "translateZ(0px)",
      animation: "2s ease 0s 6 normal none running loading-indicator",
    }}>
  </iframe>
  )
}



    // <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    //   <div className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
    //     <iframe
    //       // className="my-4"
    //       width="280"
    //       src={`https://www.youtube.com/embed/${vid1}?hd=1&iv_load_policy=3`}
    //       title="YouTube video player"
    //       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
    //     </iframe>
    //   </div>
    //   <div className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
    //     <iframe
    //       // className="my-4"
    //       width="280"
    //       src={`https://www.youtube.com/embed/${vid2}?hd=1&iv_load_policy=3`}
    //       title="YouTube video player"
    //       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
    //     </iframe>
    //   </div>
    // </div>