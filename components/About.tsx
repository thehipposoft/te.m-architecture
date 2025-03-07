import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='h-screen flex items-center'>
      <div className='md:h-[600px] pl-[5%] border-t boreder-b my-8 flex items-center'>
          <div id='about' className='md:w-[1170px] md:h-[435px] py-8 flex justify-center gap-8 bg-[#FBFBFB] rounded-tr-[200px]'>
              <div className='flex gap-4'>
                  <div className='flex flex-col gap-4'>
                    <Image src={'/assets/images/about/about-1.png'} alt='' width={270} height={265} />
                    <Image src={'/assets/images/about/about-2.png'} alt='' width={270} height={140} />
                  </div>
                  <Image src={'/assets/images/about/about-3.png'} alt='' width={270} height={345} className='pt-6' />
              </div>
              <div className='w-1/3 flex flex-col'>
                  <p className='text-6xl text-[#DDDDDD] m-0'>About</p>
                  <p className='pt-4 m-0'>We are Mica and Flor, lifelong friends united by a shared passion: design and architecture. We studied together at the National University of Córdoba, Argentina, and since then, we have shared the desire to create spaces that truly adapt to the people who inhabit them ....Read more</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About