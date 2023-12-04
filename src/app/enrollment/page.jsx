import { ContactSection } from '@/components/contact';

import Image from 'next/image'
import cat from '@/images/classroom/maxine.png';

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

export default function Enrollment() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 pt-12 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>


        <p className="mt-4 font-poppins">
          There is currently space for 6 students.
        </p>


        <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Month-to-Month Rates
        </h3>


        <table border="0" className='mt-4'>
          <tbody>
            <tr>
                <td>Full day 9 a.m. to 3:30 p.m.</td>
                <td className="pl-4">$1100</td>
            </tr>
            <tr>
                <td>Extended hours 8:00 to 5 p.m.</td>
                <td className="pl-4">$1200</td>
            </tr>
            <tr>
                <td>Registration and Material Fee</td>
                <td className="pl-4">$200</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-8 font-poppins">
          Sibling and active military discounts available, please inquire.
        </p>

        <p className="mt-4 font-poppins">
          Subsidization programs welcome.
        </p>

        <p className="mt-4 font-poppins">
          Ask about our $100 referral bonus!
        </p>

        <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Quarterly Tuition Rate
        </h3>
        <p className="mt-4 font-poppins max-w-2xl">
          Tuition can be paid in quarterly installments. Quarterly tuition will be discounted by $150 total for the 3-month period.
        </p>


        <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins ">
          Annual Tuition Plan
        </h3>
        <p className="mt-4 font-poppins max-w-2xl">
          An annual tuition option will be offered starting in fall of 2024. A
          discount of 5% will apply to annual tuition paid in advance.
          Cancellation of the contract prior to the end of contract will result
          in a loss of the tuition discount for the entire year.
        </p>


        <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Registration/ Materials Fee
        </h3>
        <p className="mt-4 font-poppins max-w-2xl">
          There is a Registration &amp; Materials Fee of $200 due before you
          receive your application packet. This fee is non-refundable and
          reserves your space in the classroom until the enrollment process
          is complete. At that time this fee is used toward program
          materials.
        </p>


<p className="mt-12 max-w-2xl">
<strong> A heads-up to parents or children with allergies: There is a
cat in the house.</strong> She loves children and plays (and naps)
inside and outside my home.
</p>

        <div className="flex flex-col items-center justify-start my-12">
        <div className="relative aspect-[12/10] w-2/3 max-w-md flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800  sm:rounded-2xl shadow-lg">
          <Image
            src={cat}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            className="inset-0 h-full w-full object-cover"
          />
          
        </div>
        <p className="text-center px-4 py-4 text-lg text-slate-700">
          Maxine the cat
        </p>
        </div>




        <ContactSection showLicense={true}/>

      </main>
    </div>
  )
}
