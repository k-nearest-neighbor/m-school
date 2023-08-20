'use client'
import Image from 'next/image'

import { useTheme } from "next-themes";

import darkLogo from '@/images/logos/aib-logo-transparent-dark.png';
import lightLogo from '@/images/logos/aib-logo-transparent-light.png';


export function Logomark(props) {
  const { theme } = useTheme();
  const imgSrc = (theme === 'dark') ? darkLogo : lightLogo;
  return (
      <Image
        src={(theme === 'dark') ? darkLogo : lightLogo}
        alt=""
        height={70}
        unoptimized
        priority
      />
  )
}

export function Logo(props) {
  return (
      <span className='text-3xl font-extrabold'>AI Breakout</span>
  )
}
