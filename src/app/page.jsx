import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import Map from '@/components/GoogleMap';

import classroom1 from '@/images/classroom/1.jpg';
import classroom2 from '@/images/classroom/2.jpg';
import classroom3 from '@/images/classroom/3.jpg';
import classroom4 from '@/images/classroom/4.jpg';
import classroom5 from '@/images/classroom/5.jpg';

import kids1 from '@/images/kids/practical-life/0-1.jpg';
import kids2 from '@/images/kids/practical-life/0.jpg';

import kids3 from '@/images/kids/language/0-2.jpg';
import kids4 from '@/images/kids/math/0-5.jpg';


export const metadata = {
  title: {
    template: '%s',
    default: 'Orchard Montessori',
  },
  description:
    'Orchard Montessori is a small private school in Fairfield for ages 3-6. Orchard is committed to providing a nurturing environment based on Montessori principles.',
  openGraph: {
    title: "Orchard Montessori",
    description:
      "Orchard Montessori is a small private school in Fairfield for ages 3-6. Orchard is committed to providing a nurturing environment based on Montessori principles.",
    images: [
      {
        url: "https://www.ai-breakout.com/main-card-2309.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchard Montessori",
    description:
      "Orchard Montessori is a small private school in Fairfield for ages 3-6. Orchard is committed to providing a nurturing environment based on Montessori principles.",
    images: ["/main-card-2309.png"],
    creator: "Orchard Montessori",
  },
}


export default function Posts() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 pt-0 pb-[5rem] lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>
          <h1 className="my-8 text-center lg:text-left w-full lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-normal  text-sky-600 font-poppins">
            Welcome to Orchard Montessori!
          </h1>
        <p className="mt-8 font-poppins">
          Orchard Montessori is a small residence-based school in Fairfield for <span className="font-semibold">ages 3-6</span>.
        </p>
        <p className='mt-4'>
          Orchard is committed to providing a nurturing environment based on Montessori principles.
        </p>



        <div className="mt-8 mx-auto max-w-2xl grid grid-cols-2 gap-2">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids1}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids2}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids3}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids4}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={classroom1}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className=" inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={classroom2}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <h3 className="mt-12 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Full Day Program (8:00am - 5:00pm)
        </h3>
        <p className="mt-4 font-poppins">
          There is currently space for 12 students.
        </p>

          <article className="mt-8 mx-auto py-4 px-6 bg-slate-100 rounded-xl shadow-lg prose prose-slate max-w-2xl font-poppins">
              <h3 className="font-semibold mt-0 mb-4">
                About Ms. Virginia
              </h3>
              <p>
                  When my son was small, I explored different educational
                  philosophies and landed on Montessori. I had no idea at the time
                  how this would impact my life! In 1986 I moved to Sacramento to
                  become certified as a Montessori teacher.
                  Since then, I have guided so many young children through the
                  Montessori Method to become independent thinkers and
                  academically prepared for a lifetime of learning. I have also
                  trained countless interns, mentored fellow teachers and even
                  went to China to present workshops on the Montessori Method.
                  In 2023, I purchased my home in Fairfield and created my dream
                  Montessori classroom in the center of my home! Teaching is my
                  passion and so it is ideal that the classroom be the heart of my
                  home.
              </p>
              {/* <p>
                Regards,  Regards, Su Wang
              </p> */}
          </article>



        <h3 className="mt-12 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Contact
        </h3>
          <p className="mt-4 mb-4 font-poppins font-semibold text-sky-500">ms.virginia@orchardmontessori.com</p>
          <p className="mt-8 mb-4 font-poppins font-semibold">
            (925) 202-9578
          </p>
          <p className="mt-0 mb-8 font-poppins">
            643 Nevada St<br/>
            Fairfield, CA
          </p>
          <Map 
            className="border border-gray-200 rounded-md shadow-lg max-w-2xl mx-auto"
            address="643 Nevada St, Fairfield, CA"/>
      </main>
    </div>
  )
}



//Orchard Montessori is a small private school in Fairfield, CA. Orchard is committed to providing a nurturing environment that fosters a love of learning and respect for self, others, and the world around us.