'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'


const PARAGRAPH = 'We are Mica and Flor, lifelong friends united by a shared passion: design and architecture. We studied together at the National University of Córdoba, Argentina, and since then, we have shared the desire to create spaces that truly adapt to the people who inhabit them.'


const About = () => {

  const container = useRef(null)

  const mm = gsap.matchMedia();
  
  useGSAP(() => {
    mm.add("(min-width: 1300px)", () => {
      gsap.from('.reveal', {
        scrollTrigger: {
            trigger: container.current,
            start: '20% center',
        },
        opacity: 0,
        yPercent: 25,
        duration: .5,
        stagger: 0.1,
      })
  })

  })

  return (
    <div ref={container} className='md:h-screen flex items-center justify-center my-8 md:my-0'>
      <div className='md:h-[600px]  mx-auto md:mx-0  border-t boreder-b my-8 flex items-center'>
          <div id='about' className='md:w-[1170px] w-[85vw] md:h-[435px] py-8 flex md:flex-row flex-col-reverse justify-center gap-16 bg-[#FBFBFB] rounded-tr-3xl md:rounded-tr-[200px]'>
              <Image src={'/assets/images/about/about.jpg'} alt='Mica and Flor photo' width={1533} height={1750} className='md:w-[358px] md:h-[457px] w-[300px] mx-auto md:mx-0  h-[400px] object-cover rounded-tl-2xl rounded-tr-[65px]' />
              <div className='md:w-1/3 w-[300px] mx-auto md:mx-0 flex flex-col gap-4 justify-center'>
                  <p className='text-6xl text-[#DDDDDD] m-0'>About</p>
                  <div className='flex gap-1 flex-wrap'>
                    {
                        PARAGRAPH.split(" ").map((char:any, index:any) => (
                                <p className='reveal m-0' key={index}>{char}</p>
                        ))
                    }
                  </div>
                  <Link className='bold reveal' href={'/about'}>...Read more</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About