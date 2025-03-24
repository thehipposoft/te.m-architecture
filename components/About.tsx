import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='h-screen flex items-center'>
      <div className='md:h-[600px] md:pl-[5%]  mx-auto md:mx-0  border-t boreder-b my-8 flex items-center'>
          <div id='about' className='md:w-[1170px] w-[85vw] md:h-[435px] py-8 flex md:flex-row flex-col-reverse justify-center gap-16 bg-[#FBFBFB] rounded-tr-3xl md:rounded-tr-[200px]'>
              <Image src={'/assets/images/about/about.jpg'} alt='Mica and Flor photo' width={1533} height={1750} className='md:w-[358px] md:h-[457px] w-[300px] mx-auto md:mx-0  h-[400px] object-cover rounded-tl-2xl rounded-tr-[65px]' />
              <div className='md:w-1/3 w-[300px] mx-auto md:mx-0 flex flex-col gap-4 justify-center'>
                  <p className='text-6xl text-[#DDDDDD] m-0'>About</p>
                  <p className='pt-4 m-0 leading-6'>We are Mica and Flor, lifelong friends united by a shared passion: design and architecture. We studied together at the National University of Córdoba, Argentina, and since then, we have shared the desire to create spaces that truly adapt to the people who inhabit them <br/><Link className='bold' href={'/about'}>...Read more</Link></p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About