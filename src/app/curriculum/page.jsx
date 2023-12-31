import Image from 'next/image'

import { ContactSection } from '@/components/contact';

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
import lang4 from '@/images/kids/language/four.png';

import langWriting1 from '@/images/kids/language/writing/1.jpg';
import langWriting2 from '@/images/kids/language/writing/2.jpg';
import langWriting3 from '@/images/kids/language/writing/3.jpg';
import langWriting4 from '@/images/kids/language/writing/4.jpg';



import math1 from '@/images/kids/math/1.jpg';
import math2 from '@/images/kids/math/2.jpg';
import math3 from '@/images/kids/math/3.jpg';
import math4 from '@/images/kids/math/4.jpg';

import sens0 from '@/images/kids/sensorial/0.jpg';
import sens1 from '@/images/kids/sensorial/1.jpg';
import sens2 from '@/images/kids/sensorial/2.jpg';
import sens3 from '@/images/kids/sensorial/3.jpg';
import sens4 from '@/images/kids/sensorial/4.jpg';
import sens5 from '@/images/kids/sensorial/5.jpg';


import cultural0 from '@/images/kids/cultural/0.jpg';
import cultural1 from '@/images/kids/cultural/1.jpg';
import cultural2 from '@/images/kids/cultural/2.jpg';
import cultural3 from '@/images/kids/cultural/3.jpg';
import cultural4 from '@/images/kids/cultural/4.jpg';
import cultural6 from '@/images/kids/cultural/6.jpg';





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

export default function Testimonials() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-0 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main className="py-8 space-y-8 prose prose-slate font-poppins">

          <h1 className="mb-8 text-center lg:text-left w-full lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-normal  text-sky-600 font-poppins">
            Curriculum
          </h1>


          {/* old content */}
          {/* <p>
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
          <p>
          Orchard Montessori uses the Montessori Method founded by Dr. Maria Montessori. The Montessori Method of education emphasizes hands-on, individualized learning within mixed age groups in a child-friendly setting.
          </p>
          <p>
          At Orchard Montessori we recognize that children are curious, competent, and capable. Everything in the classroom is available to everyone to use to the best of their ability. By creating a classroom environment that allows for open-ended learning and discovery, we give children the opportunity to explore and learn concepts when they are ready for them.
          </p>

        */}
          <p>
          Orchard Montessori has a theme-based curriculum. Each month we will explore new theme-based concepts. Maybe we will be focused on &quot;community helpers&quot; and learn about farmers, where food comes from and the food groups. We may focus on the season or a holiday. The theme changes frequently to keep the children interested in learning new things!
          </p>

          <p>Our study theme will influence the entire classroom, including each Montessori area.</p>

          <p>
          Throughout the year, there is foundation curriculum which covers five areas of learning:
          </p>

        <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-sky-600 dark:text-white font-poppins">
          Practical Life
        </h3>

        {/* old content */}
        {/* <p>The Practical Life area was a monumental creation by Dr. Montessori. The Practical Life area allows children to practice basic and purposeful daily activities while developing their eye-hand coordination, concentration and to gain self-confidence.</p>
        <p>By manipulating small items children develop fine motor dexterity necessary for writing and drawing. In addition to fine motor, sorting activities develop visual discrimination necessary for math and language activities.</p> */}
        
        <p>
        The Practical Life area is for exploring and practicing transferring things from one place to another with pitchers, spoons, tongs or the whole hand. Children also learn to sort like things. These activities help the child to develop a stronger hand and finger grasp. They learn to concentrate and develop their eye hand coordination.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500 px-2 sm:px-4'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 px-2 sm:px-4">
            {/* <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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

        {/* <p>
          The sensorial area of the classroom is a place to not only explore with the senses, but a way to prepare for other work. Children explore ideas such as the gradations and the vocabulary of colors, shapes and sizes. They practice and develop process and practice strategy.
        </p> */}

        <p>
        This area of the classroom is all about the senses! A young child will match 2 colors, while an older child will grade colors from dark to light. They can shake two sound cylinders and match the two that sound alike.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500 px-2 sm:px-4'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 gap-2 px-2 sm:px-4">
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={sens3}
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={sens4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                The Hexagon Box
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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

        {/* <p>In a Montessori classroom the focus is on developing specific language skills:</p>
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
          Language materials change frequently in our classroom to encourage enthusiasm and to keep up with the developmental needs of the children. The cultural and seasonal units of study will include many new activities. Special days and holidays will always include language enriching activities.
        </p>

        <p>
          Basic skills like letter recognition and phonics slowly build into more complex concepts and
          reading activities. We use a lot of cut and paste activities and writing + drawing activities to
          develop processing skills and improve fine motor development. Children are well prepared for
          future academics when they have attended a quality Montessori program.
        </p> */}

        <p>
        Language studies are more than letter and sound activities. Children learn about opposites, rhyming, following directions and more. Many Montessori preschool children begin reading simple words because of the activities they use in the classroom.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500 px-2 sm:px-4'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 gap-2 px-2 sm:px-4">
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang3}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Word building
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={lang4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Movable Alphabet
              </p>
            </div>
        </div>


        <p className="pb-8">
          A parallel path is forged with hand-eye coordination and fine motor development to encourage a sense of success in writing and drawing.
        </p>


        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 gap-2 px-2 sm:px-4">

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={langWriting3}
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={langWriting4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Tracing table
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={langWriting1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Sentence writing
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={langWriting2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                &quot;6 words paper&quot; <br/> (write and draw 6 words)
              </p>
            </div>

        </div>

        <h3 className="mt-12 text-center text-xl font-semibold tracking-tight text-sky-500 dark:text-white font-poppins">
          Mathematics
        </h3>
      
        {/* <p>
          Montessori math is a hands-on approach. Children in a 3 to 6 Montessori program learn rote counting, numeration, numeral/ quantity association, addition, subtraction, skip counting & multiplication, fractions and round clock time.
        </p> */}

        {/* <p>
        The Math Area is a wonderful place for mixed ages to work together to master concepts. The
        older child develops self-esteem helping a younger friend, while the younger child is
        encouraged to aspire to be like their older friend.
        </p>
        <p>Montessori math is a hands-on approach. Children manipulate physical quantities and associate them with numerals. This enables them to grasp the concept of quantity in a math equation.
        </p> 

        
         <p>Children in a 3 to 6 Montessori program learn:</p>

        <ul className="!mt-4 marker:text-sky-500">
            <li className="mt-0">Rote counting</li>
            <li className="mt-0">Numeral / quantity association</li>
            <li className="mt-0">Numeral sequencing to 1000s</li>
            <li className="mt-0">Greater than, less than</li>
            <li className="mt-0">Addition up to quantities of 1000s</li>
            <li className="mt-0">Subtraction up to quantities of 1000s</li>
            <li className="mt-0">Skip counting &amp; multiplication introduction</li>
            <li className="mt-0">Fractions</li>
            <li className="mt-0">Round clock time</li>
            <li className="mt-0">Measurement</li>
        </ul>
        */}

        <p>
        The Math area starts out with very basic number and quantity activities and goes into large numbers and quantities. Yes, Montessori preschool children use thousands! They will be introduced to adding, subtraction, odd &amp; even and other concepts.
        </p>

        <p className='text-sm italic mt-8 mb-0 text-slate-500 px-2 sm:px-4'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 gap-2 px-2 sm:px-4">
            
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
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
        </div>

        <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Art
        </h3>

        <p>
        In addition to these core areas there is always a very popular art area! The art shelf is supplied with all the things needed for your child to make their own pictures or to complete an art project on their own. We also have teacher directed craft projects that go with our themes.
        </p>

        {/* <h3 className="mt-12 text-center  text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Cultural Studies
        </h3>

        <div className="mt-8 mx-auto max-w-2xl grid grid-cols-2 gap-2">
          <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids1}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        
          <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
            <Image
              src={kids2}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        </div> */}


        {/* I guess we're doing art instead of cultural studies */}

        {/* <h3 className="mt-12 text-center text-xl font-semibold tracking-tight text-sky-500 dark:text-white font-poppins">
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
            <strong>North America</strong> (a fall unit) &#8212; We will study food, landmarks, climate, and cultures of
            countries of the continent while studying animal homes and habitats (dessert,
            mountains, plains, prairies etc.), migration/ hibernation/ adaptation in preparation for
            winter.
          </li>
        </ul>

        <p className='text-sm italic mt-8 mb-0 text-slate-500 px-2 sm:px-4'>Note: The photos below were taken in my classroom in Palo Alto.</p>
        <div className="mx-auto !mt-2 !pt-0 max-w-2xl grid grid-cols-2 gap-2 gap-2 px-2 sm:px-4">
            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural0}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Fall-theme: Using pin and sequin to make a jack-o-lantern face
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural1}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Summer theme: Word building activity
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural2}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Botany unit: Parts of the flower
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural3}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Spring theme: Alphabet flowers
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural4}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                South America theme: Rain forrest animals puzzle.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative aspect-[9/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-full sm:rounded-2xl shadow-lg">
                <Image
                  src={cultural6}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="inset-0 h-full w-full object-cover"
                />

              </div>
              <p className="text-center px-4 text-sm text-slate-700">
                Valentines Day: Fine motor activity
              </p>
            </div>


        </div> */}



        <ContactSection/>

      </main>
    </div>
  )
}








