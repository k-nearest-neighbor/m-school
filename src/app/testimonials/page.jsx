import { ContactSection } from '@/components/contact';

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
      <main className="py-8">

          <h1 className="mb-8 text-center lg:text-left w-full lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-normal  text-sky-600 font-poppins">
            Testimonials
          </h1>

          <article className="bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Brandon&#39;s mom
              </h3>
              <p>
                Ms. Virginia is one of the most creative and respectful teachers that we have the privilege to
                have as my son&#39;s preschool teacher. My son spent about two years at Palo Alto Academy
                Bilingual Montessori school when he was 3 to 5 years old. Ms. Virginia was the lead teacher in
                his class, as well she&#39;s the Director responsible for designing the education program and
                coaching other teachers. I was very impressed by the creativity and variety of what my son
                learned as a pre-k student. Over the two-year time period, due to schedule conflicts, my son
                needed to take more breaks from school than normal. However, Ms. Virginia made sure he
                transitioned smoothly back to his class each time with care and support, more importantly, my
                son made consistent progress and developed some major skills and interests successfully after
                he overcame challenges thanks to the well-designed and advanced program. My personal
                appreciation as a mother was the open and thoughtful communications during multiple
                parent-teacher conferences whenever it&#39;s needed, that Ms. Virginia made sure she was
                there for us and her feedback was always constructive and advices were specifically
                catered to the child. All in all, Ms. Virginia is loved by her students and highly regarded
                and respected by all the parents. We will miss her so much as my son is ready to start
                his kindergarten soon at a big public school in Mountain View.
              </p>
              {/* <p>
                Regards,  Regards, Su Wang
              </p> */}
          </article>

          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Daren&#39;s mom
              </h3>
              <p>
                Our older son started with Ms. Virginia’s class at age 4 and after one year, I can clearly
                see his improvement not only on academic progress but also social skills. Ms. Virginia is
                always calm, warm and patient and she is treating kids like a little adult, talking to them
                reasonably and cares about the student’s ability to be independent. We really like Ms.
                Virginia’s education philosophy and appreciate she always provides insightful advice.
                She cares about kids and knows the personality of different kids and respects their
                difference. I really wish we had met Ms. Virginia earlier. We will always remember the
                good time she brought for our kid!
              </p>
          </article>

          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Lucas&#39;s mom
              </h3>
              <p>
                My son has been in Ms. Virginia class at Palo Alto Bilingual Montessori for more than
                two years, until his graduation into kindergarten. I&#39;ve seen him growing to be friendly
                and understanding, and overall a better kid with the guidance from Ms. Virginia. Highly
                recommended! 
              </p>
          </article>

          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Ollie&#39;s mom
              </h3>
              <p>
                Ms. Virginia was the head teacher for my son’s class for almost two years at Palo Alto
                Bilingual Montessori Academy. Ms. Virginia was super passionate about teaching and
                genuinely cared about her students. She brought a wealth of knowledge in designing
                and executing an inspiring and well-balanced curriculum. She put much emphasis on
                the foundational skills in the children’s early development, and created a fun and
                supportive environment where my son thrived. She was also good at setting boundaries
                and implementing positive reinforcement on “good behaviors” - critical for preschoolers!
                Ms. Virginia is one of those teachers that really leave a lasting impression on her
                students and their families. We’re so grateful for her care and guidance for our son, and
                we would strongly recommend Ms. Virginia to her future students!
              </p>
          </article>

          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Kai & Zoey&#39;s dad
              </h3>
              <p>
                We had the privilege of having both of our children in Ms. Virginia’s class. Her patience and
                understanding of each child’s needs and motivations is incredible. Our children were very well
                prepared academically for kindergarten. The real impact she has had on our children was her way
                of relating to them and guiding their social interactions and their compassion for others. Our kids
                are self-confident, conscientious and focused thinkers. We feel that our children are better people
                because of Ms. Virginia’s influence.
              </p>
          </article>
              
          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Sophia&#39;s mom
              </h3>
              <p>
                Our daughter, Sofia was in Ms. Virginia’s class for 2 ½ years. She was very shy and didn’t speak
                English when she started at school. Ms. Virginia helped her to feel a part of the group. She liked
                coming to the school from the beginning because Ms. Virginia was so kind. Over time Sofia was
                speaking English and making friends. All the kids in the classroom are so nice because of Ms.
                Virginia’s way with the kids. Our girl is happy and has a lot of friends. Sofia learned to read and
                write. She does things our son did not do at her age. She was ready for kindergarten when she
                left Ms. Virginia’s class.
              </p>
          </article>
              
          <article className="my-8 bg-slate-100 rounded-xl shadow-lg py-4 px-6 prose prose-slate max-w-2xl">
              <h3 className="font-semibold mt-0 mb-4">
                Angela&#39;s mom
              </h3>
              <p>
                What can I say? Ms. Virginia is truly a gifted teacher. The children really respect her, and she is
                excellent at helping them to learn. I had the opportunity to observe the class on numerous
                occasions. Her unique way of relating to the children helps them to understand whatever she is
                teaching. The units of study change frequently and have a variety of activities to interest every
                age and ability of the child. Other teachers would come to visit her classroom to get ideas –
                which she was always willing to share.
              </p>
          </article>


        <ContactSection/>


      </main>
    </div>
  )
}








