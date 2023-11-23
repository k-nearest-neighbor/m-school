import Image from 'next/image'
import Map from '@/components/GoogleMap';

import classroom1 from '@/images/classroom/1.jpg';
import classroom2 from '@/images/classroom/2.jpg';
import classroom3 from '@/images/classroom/3.jpg';
import classroom4 from '@/images/classroom/4.jpg';
import classroom5 from '@/images/classroom/5.jpg';

import pl0 from '@/images/kids/practical-life/0.jpg';
import pl1 from '@/images/kids/practical-life/1.jpg';
import pl2 from '@/images/kids/practical-life/2.jpg';
import pl3 from '@/images/kids/practical-life/3.jpg';
import pl4 from '@/images/kids/practical-life/4.jpg';

import lang0 from '@/images/kids/language/0.jpg';
import lang1 from '@/images/kids/language/1.jpg';
import lang2 from '@/images/kids/language/2.jpg';
import lang3 from '@/images/kids/language/3.jpg';
import lang4 from '@/images/kids/language/4.jpg';


import math1 from '@/images/kids/math/1.jpg';
import math2 from '@/images/kids/math/2.jpg';
import math3 from '@/images/kids/math/3.jpg';
import math4 from '@/images/kids/math/4.jpg';

import sens0 from '@/images/kids/sensorial/0.jpg';
import sens1 from '@/images/kids/sensorial/1.jpg';
import sens2 from '@/images/kids/sensorial/2.jpg';



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
      "Authentic Montessori in Fairfield for ages 3-6.",
    images: [
      {
        url: "https://www.orchardmontessori.school/main-card-2312.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchard Montessori",
    description:
      "Authentic Montessori in Fairfield for ages 3-6.",
    images: ["/main-card-2312.png"],
    creator: "Orchard Montessori",
  },
}

export default function Testimonials() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-0 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main className="py-8 space-y-8 prose prose-slate font-poppins">

          <h1 className="mb-8 text-center lg:text-left w-full lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-normal  text-sky-600 font-poppins">
            Curriculum
          </h1>

          <p>
Orchard Montessori&#39;s educational vision is based upon the curriculum
principles of the Montessori Method founded by Dr. Maria Montessori. The Montessori Method of education emphasizes hands-on, individualized learning within mixed age
groups in a child-friendly setting.
</p>
<p>
At Orchard Montessori we recognize that children are curious, competent and
capable. In the Montessori classroom, everything is available to everyone to use to the
best of their ability. By creating a classroom environment that allows for open-ended
learning and discovery, we give children the opportunity to explore and learn concepts
when they are ready for them.
</p>

<p>
Throughout the year, there is foundation curriculum which covers five areas of learning: <strong>Practical Life, Sensorial,
Language, Mathematics and Cultural Studies.</strong>
</p>



        <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-sky-600 dark:text-white font-poppins">
          Practical Life
        </h3>

        <p>The Practical Life area was a monumental creation by Dr. Montessori. The Practical Life area allows children to practice basic and purposeful daily activities while developing their eye-hand coordination, concentration and to gain self-confidence.</p>
        <p>By manipulating small items children develop fine motor dexterity necessary for writing and drawing. In addition to fine motor, sorting activities develop visual discrimination necessary for math and language activities.</p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2">
            {/* <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={pl0}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Caption
              </p>
            </div> */}
        
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={pl1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Practical Life activities, 3 & 4 y.o.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={pl2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Fine motor development
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={pl3}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Sorting activity (develops concentration)
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={pl4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Fine-motor & visual discrimination 
              </p>
            </div>
        </div>

        <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-sky-600 dark:text-white font-poppins">
          Sensorial
        </h3>

        <p>
          The sensorial area of the classroom is a place to not only explore with the senses, but a way to prepare for other work. Children explore ideas such as the gradations and the vocabulary of colors, shapes and sizes. They practice and develop process and practice strategy.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={sens0}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Knobless Cylinders activity
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={sens1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Pink Tower & Brown Stair combined
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={sens2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Sound Cylinders
              </p>
            </div>

        </div>


        <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-sky-600 dark:text-white font-poppins">
          Language
        </h3>

        <p>In a Montessori classroom the focus is on developing specific language skills:</p>
          <ul className="!mt-4 marker:text-sky-500">
            <li className="mt-0">letter recognition</li>
            <li className="mt-0">letter + sound association</li>
            <li className="mt-0">simple word reading</li>
            <li className="mt-0">reading and sentence building</li>
          </ul>
        <p className="!my-4">and important language concepts:</p>
          <ul className="!mt-0  marker:text-sky-500">
            <li className="mt-0">opposites</li>
            <li className="mt-0">story sequencing</li>
            <li className="mt-0">what goes together</li>
            <li className="mt-0">positional words</li>
            <li className="mt-0">following directions</li>
            <li className="mt-0">... and more</li>
          </ul>
        <p>
          A parallel path is forged with eye/ hand coordination and fine motor development to encourage sense of success in writing and drawing.
        </p>
        <p>
          Language materials change frequently in our classroom to encourage enthusiasm and to keep up with the developmental needs of the children. The cultural and seasonal units of study will include many new activities. Special days and holidays will always include language enriching activities.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang0}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                (3 y.o.) letter matching
              </p>
            </div>

            {/* <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Caption
              </p>
            </div> */}

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                (4 y.o.) sentence building
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang3}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Metal Insets <br/>(writing development activity)
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Tracing table
              </p>
            </div>
        </div>

        <h3 className="mt-12 text-center text-xl font-semibold tracking-tight text-sky-500 dark:text-white font-poppins">
          Mathematics
        </h3>
      
        <p>
          Montessori math is a hands-on approach. Children in a 3 to 6 Montessori program learn rote counting, numeration, numeral/ quantity association, addition, subtraction, skip counting & multiplication, fractions and round clock time.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2">
            
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={math2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                (3 y.o.) 1-to-1 correspondence  activity
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={math1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Big Layout. <br/> Numeral and quantity association to 9,000
              </p>
            </div>



            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={math3}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Hundred Board
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={math4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Teen Boards
              </p>
            </div>
        </div>

        {/* <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Cultural Studies
        </h3>

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
        </div> */}


        <h3 className="mt-12 text-center text-xl font-semibold tracking-tight text-sky-500 dark:text-white font-poppins">
          Cultural Studies
        </h3>

<p>
Cultural studies are theme-based. The units of study/ themes will change every 1 to 2 months and will touch all areas of the
classroom. Some units of study will coincide with the seasons, holidays and other timely events.
The cycle of themes are in a 2-year rotation. Some examples of themes are:
</p>
<ul className="list-disc pl-4">
  <li className="pb-6">
    <strong>Farmers</strong> (a fall unit) &#8212; The children will learn about the harvest, where food, clothing,
    construction materials come from, food groups and nutrition, parts of the plant, farm
    animals.  
  </li>
  <li>
    <strong>North America</strong>(a fall unit) &#8212; We will study food, landmarks, climate, and cultures of
    countries of the continent while studying animal homes and habitats (dessert,
    mountains, plains, prairies etc.), migration/ hibernation/ adaptation in preparation for
    winter.
  </li>
</ul>

        <h3 className="!mt-[8rem] text-xl font-semibold tracking-tight text-sky-600 dark:text-white font-poppins text-center">
          Contact
        </h3>
          <p className="mt-4 mb-4 font-poppins font-semibold text-sky-500 text-center">ms.virginia@orchardmontessori.com</p>
          <p className="mt-8 mb-4 font-poppins font-semibold text-center">
            (925) 202-9578
          </p>
          <p className="mt-0 mb-8 font-poppins text-center">
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








