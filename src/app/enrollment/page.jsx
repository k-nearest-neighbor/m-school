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
      "Orchard Montessori is a small private school in Fairfield for ages 3-6. Orchard is committed to providing a nurturing environment based on Montessori principles.",
    images: [
      {
        url: "https://www.ai-breakout.com/main-card-2312.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchard Montessori",
    description:
      "Orchard Montessori is a small private school in Fairfield for ages 3-6. Orchard is committed to providing a nurturing environment based on Montessori principles.",
    images: ["/main-card-2312.png"],
    creator: "Orchard Montessori",
  },
}

export default function Enrollment() {

  return (
    <div className='min-w-0 max-w-2xl flex-auto px-4 py-0 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
      <main>

        <h3 className="mt-12 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins">
          Full Day Program (8:00am - 5:00pm)
        </h3>
        <p className="mt-4 font-poppins">
          There is currently space for 12 students.
        </p>

      </main>
    </div>
  )
}
