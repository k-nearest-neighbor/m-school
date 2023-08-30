


export function YoutubeEmbed({vid}) {
  return (
    <div className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
      <iframe
        width="280"
        src={`https://www.youtube.com/embed/${vid}?hd=1&iv_load_policy=3`}
        title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
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
    height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
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
    height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
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