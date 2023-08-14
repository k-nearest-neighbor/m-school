import Image from 'next/image'


// import blurCyanImage from '@/images/blur-cyan.png'
// import blurIndigoImage from '@/images/blur-inasdfasdfdigo.png'


import fourByTwoLightImage from '@/images/logos/4x2-lights.png' // coolest but too weird
import emergencyLampImage from '@/images/logos/emergency-lamp.png' // 1
import emergencyLampImage2 from '@/images/logos/emergency-lamp2.png' // 2
import emergencyLampImage3 from '@/images/logos/emergency-lamp3.png' // 2

import hazardLampImage1 from '@/images/logos/hazard-lamp1.png' //1
import hazardLampImage2 from '@/images/logos/hazard-lamp2.png'
import hazardLampImage3 from '@/images/logos/hazard-lamp3.png'

// export function LogomarkPaths() {
//   return (
//     <Image
//       src={fourByTwoLightImage}
//       alt=""
//       width={530}
//       height={80}
//       unoptimized
//       priority
//     />

//   )
// }

export function Logomark(props) {
  return (
    <>
        <Image
            // src={hazardLampImage3}
            src={fourByTwoLightImage}
            alt=""
            height={70}
            unoptimized
            priority
          />
    </>
  )
}

export function Logo(props) {
  return (
      <span className='text-3xl font-extrabold'>AI Breakout</span>
  )
}
