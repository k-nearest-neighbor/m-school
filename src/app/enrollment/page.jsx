import Map from '@/components/GoogleMap';

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
      "Montessori in Fairfield for ages 3-6.",
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
      "Montessori in Fairfield for ages 3-6.",
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
        </table>


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


        <h3 className="mt-[8rem] text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins text-center">
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
