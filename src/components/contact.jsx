import Map from '@/components/GoogleMap';

export function ContactSection({showLicense=true}) {


  return (

      <div className="flex flex-col items-center justify-center pb-[4rem] w-full">
        <h3 className="mt-12 text-xl font-semibold tracking-tight text-gray-800 dark:text-white font-poppins text-center">
          Contact
        </h3>
          <p className="mt-4 mb-4 font-poppins font-semibold text-center">
            <a className='text-sky-500 no-underline hover:underline' href="mailto:ms.virginia@orchardmontessori.school">ms.virginia@orchardmontessori.school</a>
          </p>
          
          <p className="mt-8 mb-4 font-poppins font-semibold text-center">
            (925) 202-9578
          </p>
          <p className="mt-0 mb-8 font-poppins text-center">
            643 Nevada St<br/>
            Fairfield, CA
          </p>
          <Map 
            className="border border-gray-200 rounded-md shadow-lg w-full max-w-2xl mx-auto"
            address="643 Nevada St, Fairfield, CA"/>

          {showLicense && <p className="mt-8 mb-4 font-poppins text-center text-sm text-slate-500">
            License #483010543
          </p>}
      </div>
  )
}
