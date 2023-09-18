'use client'

import Link from 'next/link'
import Image from 'next/image'
import profileImage from '@/images/desmond-grealy.png'
import { Prose } from '@/components/Prose'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function GitHubIcon () {
  return (
      <div style={{transform:"scale(0.85)"}} className="text-slate-400 dark:text-slate-500 hover:text-slate-100 dark:hover:text-slate-400">
        <span className="sr-only">GitHub</span>
        <svg width="25" height="24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"
          />
        </svg>
      </div>
  )
}

function TwitterXIcon () {
  return (
      <div style={{transform:"scale(0.85)"}} className="text-slate-400 dark:text-slate-500 hover:text-slate-100 dark:hover:text-slate-400">
          <span className="sr-only">Twitter X Logo</span>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
      </div>
  )
}






function DiscordIcon () {
  return (
      <div style={{transform:"scale(0.85)"}} className="text-slate-400 dark:text-slate-500 hover:text-slate-100 dark:hover:text-slate-400">
        <span className="sr-only">Discord</span>
        <svg width="23" height="24" fill="currentColor">
          <path d="M9.555 9.23c-.74 0-1.324.624-1.324 1.385S8.827 12 9.555 12c.739 0 1.323-.624 1.323-1.385.013-.761-.584-1.385-1.323-1.385Zm4.737 0c-.74 0-1.324.624-1.324 1.385S13.564 12 14.292 12c.74 0 1.324-.624 1.324-1.385s-.584-1.385-1.324-1.385Z" />
          <path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z" />
        </svg>
      </div>
  )
}


export default function Faq() {


  return (
    <>


      <main>
        



        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="lg:col-start-3 lg:row-end-1 sm:w-fit mx-auto">
              <h2 className="sr-only">Author Information</h2>
              <div className="my-8 flex rounded-3xl p-6
                            bg-darkerish
                            dark:bg-black
                            shadow-2xl
                            dark:shadow-cool
                            ">
                <div className="flex flex-col w-full p-4">

                    {/* <Image
                      // className="h-32 w-32 rounded-full dark:border border-3 border-slate-700 mx-auto"
                      className="h-32 w-32 rounded-full mx-auto  shadow-avatar"
                      // style={{boxShadow: '0px 0px 99px #9994cc54'}}
                      src={profileImage}
                      alt="Cool Person"
                    /> */}
                    {/* <span className="absolute bottom-0 left-12 w- block rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20" >
                        Successful Person   
                    </span> */}

                  
                  {/* <div className=" w-full pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className="rounded-md px-3 py-1 mx-auto w-fit flex items-center whitespace-nowrap text-sm font-medium text-green-400 ring-1 ring-inset ring-green-400/50">
                      Cool Person
                      <CheckCircleIcon className="h-5 ml-2"></CheckCircleIcon>
                    </dd>
                  </div> */}
                  {/* <div className="flex-auto w-full pt-6 text-2xl font-bold text-center text-white"> */}
                  <div className="flex-auto w-full text-2xl font-bold text-center text-white">
                    Desmond Grealy
                  </div>
                  <div className=" w-full pt-4">
                    {/* Just a fast way to get these social icons working */}
                    {/* <script src="https://kit.fontawesome.com/80772199a9.js" crossorigin="anonymous"></script> */}

                    <dt className="sr-only">Github Profile</dt>
                    <dd className="py-2 w-full flex whitespace-nowrap ">
                      <Link href="https://github.com/k-nearest-neighbor" className="flex whitespace-nowrap text-sky-500 hover:text-sky-400" >
                        <GitHubIcon style={{transform:"scale(0.85)"}}></GitHubIcon>
                        <span className="ml-2">k-nearest-neighbor</span>
                      </Link>
                    </dd>

                    <dt className="sr-only">Discord Profile</dt>
                    <dd className="py-2 w-full flex whitespace-nowrap ">
                      <Link href="https://discord.com/users/993424051949293608" className="flex whitespace-nowrap text-sky-500 hover:text-sky-400" >
                        <DiscordIcon style={{transform:"scale(0.85)"}}></DiscordIcon>
                        <span className="ml-2">k_nearest_neighbor</span>
                      </Link>
                    </dd>

                    <dt className="sr-only">X Profile</dt>
                    <dd className="py-2 w-full flex whitespace-nowrap ">
                      <Link href="https://twitter.com/k_nearest" className="flex whitespace-nowrap text-sky-500 hover:text-sky-400" >
                        <TwitterXIcon style={{transform:"scale(0.85)"}}></TwitterXIcon>
                        <span className="ml-2">k_nearest</span>
                      </Link>
                    </dd>

                    {/* <dt className="sr-only">Email</dt>
                    <dd className="py-1 w-full flex whitespace-nowrap ">
                      <Link href="mailto:des@ai-breakout.com" className="flex whitespace-nowrap text-sky-500 hover:text-sky-400" >
                        <span className="ml-2">des@ai-breakout.com</span>
                      </Link>
                    </dd> */}
                  </div>


                </div>

              </div>
            </div>

            {/* Center Content */}
            <div className="py-8  sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2  xl:pb-20 xl:pt-16">
            <Prose>
              {/* <p className="my-6 text-black dark:text-white"> */}
              <p className="my-6">
                Hi, I&apos;m Des.
              </p>
              <p className="my-6">
                This site is a way for me to track observations about <span className='whitespace-nowrap'>ML / AI</span> research.
              </p>

              <p className="my-6">
                I made it for you too though, whoever you are, interested in the same topics. I hope you find it useful.
              </p>

              {/* <hr className="mb-0 border-b-[0.5px] border-slate-100 dark:border-slate-800/80"></hr>
              <p className="my-6">
                I'm a co-founder of a company called AI Maintainer. We're working on benchmarking AI coding tools and agents.
              </p> */}
              
              
              
              <p className="h-10"></p>
              <hr className="border-b-[0.5px] border-slate-100 dark:border-slate-800/80"></hr>
              {/* <p className="h-10"></p> */}
              
              

              <h2 className="text-2xl font-bold mt-16">
                How can I get updates about posts?
              </h2>
              <p className="my-6">
                New posts are announced on Twitter &#8212;{' '}
                <Link href="https://twitter.com/k_nearest" className="text-sky-500 hover:text-sky-400" >@k_nearest</Link>.
              </p>
              <p className="my-6">
                There is also an{' '}
                <Link href="https://ai-breakout.com/rss.xml" className="text-sky-500 hover:text-sky-400" >RSS feed</Link>.
              </p> 

              <h2 className="text-2xl font-bold mt-16">
                AI Maintainer
              </h2>
              <p className="my-6">
                I&apos;m a co-founder of{' '}
                <Link href="https://www.ai-maintainer.com" className="text-sky-500 hover:text-sky-400" >AI Maintainer</Link>.
                We&apos;re working on evals for AI coding agents.
              </p>

              <h2 className="text-2xl font-bold mt-16">
                What does the name &nbsp;<span className="">&quot;AI Breakout&quot;</span>&nbsp; mean?
              </h2>

              

              <p className="my-6">
              The name is just for fun &#8212; I like to think it&apos;s referring to the idea of AI systems escaping their containers. It seems like a fantastical idea, but eventually that might be a thing that can happen ... who knows when?
              </p>



              <p className="my-6">
                
                I&apos;m optimistic about Alignment. I do take much of X-risk seriously but I think we should have an optimistic disposition. With the right care we should probably be striving to make systems capable enough that they may one day &quot;break out&quot; into the world on their own, maybe like babies cleverly escaping their cribs:
              </p>

              
              <div className='w-fit mx-auto shadow-2xl dark:shadow-slate-900/10'>
                <iframe
                  width="280"
                  src="https://www.youtube.com/embed/8MwC0u-orNw?hd=1&iv_load_policy=3"
                  title="YouTube video player"
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
              </div>

              <p className="my-6">
              We&apos;re not there yet obviously.
              </p>

              <p className="my-6">
              It seems funny now but if an &#34;AI breakout&#34; eventually does happen, hopefully it won&apos;t be something with high costs in terms of money or human lives lost &#8212;&nbsp;because then it would make it seem like my choice of an italic font for the logo here was done in poor taste.
              
              </p>


              {/* <p className="my-6">
                
              </p> */}

              {/* <h2 className="text-2xl font-bold my-6">
                P-Doom?
              </h2>
              <p className="my-6"><a href="https://www.abc.net.au/news/2023-07-15/whats-your-pdoom-ai-researchers-worry-catastrophe/102591340" target="_blank">An intro to P-Doom</a> if you're unfamiliar.</p> 
              
              <p className="my-6">
                How I think about it:
                <br/>
                <span className='font-bold'>5 year P-Doom:</span>{' '}~5%
                <br/>
                <span className='font-bold'>10 year P-Doom:</span>{' '}~8%
                <br/>
                <span className='font-bold'>15 year P-Doom:</span>{' '}~10%
                <br/>
                <span className='font-bold'>20 year P-Doom:</span>{' '}~14%
                <br/>
                <span className='font-bold'>30 year P-Doom:</span>{' '}~19%
              </p> */}
            </Prose>
            </div>

{/* <p className="my-6">
              The idea of an AI system escaping its intended containers. Sometime in the future (who knows when?) it will be a thing that can happen. It&apos;s funny but whenever it does happen, hopefully it won&apos;t be in a situations with high costs in money or human lives lost -- making it seem like the name of this little blog was chosen in <i>super</i> poor taste.
              </p> */}
{/* The name &quot;AI Breakout&quot; is just for fun. I&apos;m optimistic about Alignment. With the right care we should probably be striving to make systems capable enough that they may one day break out into the world on their own. Just like these cute babies: */}
{/* It seems funny now but if it does happen, hopefully it won&apos;t be something with high costs in terms of money or human lives lost &#8212;&nbsp;because then it would make it seem like my choice of an italic font for the logo here was done in <i>super</i> poor taste. */}





          </div>
        </div>
      </main>
    </>
  )
}