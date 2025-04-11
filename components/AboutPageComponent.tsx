import React from 'react'
import Image from 'next/image'

const AboutPageComponent = () => {
  return (
    <div>
        <div className='flex flex-col items-center pt-[20%] md:pt-0'>
            <div className='border-t boreder-b my-8 flex items-center mx-auto'>
                <div id='about' className='lg:w-[1250px] w-[85vw] mx-auto lg:h-[435px] py-8 flex flex-col lg:flex-row justify-center md:gap-20 gap-8 bg-[#FBFBFB] rounded-tr-[200px]'>
                    <Image src={'/assets/images/about/about.jpg'} alt='Mica and Flor photo' width={1533} height={1750} className='lg:w-[358px] md:w-[500px] w-[85vw] md:h-[457px] h-96 object-cover rounded-tl-2xl rounded-tr-[65px] mx-auto lg:mx-0' />
                    <div className='w-1/3 flex flex-col gap-4 justify-center'>
                        <p className='text-6xl text-[#DDDDDD] m-0'>About</p>
                        <p className='pt-4 m-0 leading-7 lg:w-[485px] w-[85vw]'><strong className='bold'>We are Mica and Flor</strong>, lifelong friends united by a shared passion: design and architecture. We studied together at the National University of Córdoba, Argentina, and since then, we have shared the desire to create spaces that truly adapt to the people who inhabit them.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1250px] h-40 flex gap-16 justify-center items-center'>
                <div className='hidden md:block w-52 h-12 relative'>
                    <div className='w-[1px] h-12 absolute left-0 bottom-0 bg-[#E5E5E5]'/>
                    <div className='w-52 h-[1px] absolute left-0 bottom-0 bg-[#E5E5E5]'/>
                </div>
                <Image src={'/assets/images/logo.png'} alt='' width={160} height={186} className='w-[85px] h-[95px] ' />
                <div className=' hidden md:block w-52 h-12 relative'>
                    <div className='w-[1px] h-12 absolute right-0 bg-[#E5E5E5]'/>
                    <div className='w-52 h-[1px] absolute left-0 bg-[#E5E5E5]'/>
                </div>
            </div>
            <div className='border-t boreder-b mt-8 mb-20 flex items-center mx-auto'>
                <div id='about' className='lg:w-[1250px] w-[85vw] mx-auto lg:h-[435px] py-8 flex flex-col lg:flex-row-reverse justify-center md:gap-20 gap-8 bg-[#FBFBFB] rounded-tl-[200px]'>
                    <Image src={'/assets/images/about/about-2.jpg'} alt='Mica and Flor photo' width={1533} height={1750} className='lg:w-[358px] md:w-[500px] w-[85vw] h-96 md:h-[457px] object-cover rounded-tl-2xl rounded-tr-[65px] mx-auto lg:mx-0' />
                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='pt-1 m-0 leading-7 lg:w-[475px]'>
                        Today, life has taken us to different corners of the world—Mica in Australia and Flor in Spain. Despite the distance, Te.M Studio keeps us more connected than ever. Through this studio, we can work globally, collaborating with clients in different countries while continuing to contribute to our home country.
                        </p>
                        <p className='pt-1 m-0 leading-7 lg:w-[485px]'>
                        We believe that every project is unique because every person is. That’s why we work closely with each client, understanding their needs and creating designs that go beyond aesthetics to become spaces with soul.
                        </p>
                        <p className='pt-1 m-0 leading-7 lg:w-[485px]'>
                        Te.M Studio is more than an architecture studio—it’s our way of continuing to share our passion, bridging distances, and building something meaningful together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPageComponent