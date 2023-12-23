import Image from 'next/image';
import Link from 'next/link';

import { ContactSection } from '@/components/contact';

import classroom0 from '@/images/classroom/0.jpg';
import classroom1 from '@/images/classroom/1.jpg';
import classroom2 from '@/images/classroom/2.jpg';
import classroom3 from '@/images/classroom/3.jpg';
import classroom4 from '@/images/classroom/4.jpg';
import classroom5 from '@/images/classroom/5.jpg';





export const metadata = {
  title: {
    template: '%s',
    default: 'Orchard Montessori Preschool in Fairfield',
  },
  description:
    'Orchard Montessori is a private preschool and day care in Fairfield, CA for children aged 3 to 6 years old. Orchard provides an excellent pre-K & kindergarten education in a nurturing environment based on Montessori principles.',
  openGraph: {
    title: "Orchard Montessori Preschool in Fairfield",
    description:
      'Orchard Montessori is a private preschool and day care in Fairfield, CA for children aged 3 to 6 years old. Orchard provides an excellent pre-K & kindergarten education in a nurturing environment based on Montessori principles.',
    images: [
      {
        url: "https://www.orchardmontessori.school/main-card-2312.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchard Montessori Preschool in Fairfield",
    description:
      'Orchard Montessori is a private preschool and day care in Fairfield, CA for children aged 3 to 6 years old. Orchard provides an excellent pre-K & kindergarten education in a nurturing environment based on Montessori principles.',
    images: ["/main-card-2312.png"],
    creator: "Orchard Montessori",
  },
}


export default function Posts() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 pt-0 pb-[5rem] lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 font-poppins'>
      <main>
          <h1 className="my-8 text-center  w-full lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-normal  text-sky-600 font-poppins">
            Welcome to Orchard Montessori!
          </h1>
        <p className="mt-12 w-full text-center text-xl font-semibold text-slate-700">
          An authentic Montessori program located in Fairfield.
        </p>
        <p className="mt-4 w-full text-center text-xl font-semibold text-slate-700">
          The classroom is designed for children of ages 3-6 years.
        </p>
        <p className="mt-4 w-full text-center text-xl font-semibold text-slate-700">
          Younger children accepted per individual evaluation.
        </p>

        <div className="mt-16 mb-20 mx-auto max-w-2xl grid grid-cols-2 gap-2">
          {/* <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
          </div> */}
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={classroom4}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className=" inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[12/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={classroom0}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className=" inset-0 h-full w-full object-cover"
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

        <p className="mt-20 mx-auto max-w-2xl font-poppins text-left text-normal sm:text-xl">
          At Orchard Montessori, children will refine their academic skills while learning to think for
          themselves and gaining good social skills. 
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
            </p>
            <p>

                Since then, I have guided so many young children through the
                Montessori Method to become independent thinkers and
                academically prepared for a lifetime of learning. I have also
                trained countless interns, mentored fellow teachers and even
                went to China to present workshops on the Montessori Method.
            </p>
            <p>

                As a lifetime Montessorian, I utilize the philosophy developed by
                Dr. Maria Montessori as a guide to how I approach and teach
                children. Teaching children is my passion! I believe in helping
                children to always move forward in their abilities and social
                development.
            </p>
            <p>
                My focus is 2-fold: developing the skills for academic success &amp;
                developing independent thinkers with a compassion for others.
                My emphasis is on positive reinforcements and encouraging
                children to think for themselves.
            </p>
            <p>
                I purchased my home in 2023 with the intention of becoming
                licensed as a Family Childcare Home and to have a Montessori
                classroom in the heart of my home. Modifications were made to
                create the perfect space for my program, both indoors and
                outside! An outside classroom component will be added in 2024. The outside
classroom will allow the children to learn about botany firsthand by growing, nurturing and
harvesting fruit, vegetables and herbs.
            </p>
            {/* <p>
              Regards,  Regards, Su Wang
            </p> */}
        </article>

        {/* <p className="mt-20 mx-auto max-w-2xl font-poppins text-center text-normal sm:text-xl">
              An outside classroom component will be added in 2024.
        </p> */}



        <h3 className="mt-16 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins text-center">
          Full Day Program and Extended Day programs available for children ages 3-6.
        </h3>

        <p className="mt-4 font-poppins text-center text-xl">
          There is currently space for 6 students.
        </p>

        <Link
          href='curriculum'
          className='block w-full mt-4 text-center font-semibold text-sky-500 before:bg-sky-500'
        >
          <span className="line-clamp-1 text-2xl">Curriculum</span>
        </Link>

        <Link
          href='testimonials'
          className='block w-full mt-4 text-center font-semibold text-sky-500 before:bg-sky-500'
        >
          <span className="line-clamp-1 text-2xl">Testimonials</span>
        </Link>

        <Link
          href='enrollment'
          className='block w-full mt-4 text-center font-semibold text-sky-500 before:bg-sky-500'
        >
          <span className="line-clamp-1 text-2xl">View Tuition & Enrollment Info</span>
        </Link>
      <ContactSection/>

      </main>
    </div>
  )
}



//Orchard Montessori is a private school in Fairfield, CA. Orchard is committed to providing a nurturing environment that fosters a love of learning and respect for self, others, and the world around us.