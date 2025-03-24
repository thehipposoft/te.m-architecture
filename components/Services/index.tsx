import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='pt-24 pb-24 md:pb-0 md:w-auto w-[90vw] mx-auto md:mx-0'>
        <div id='services' className='md:ml-[5%] pl-16 border border-b-0 border-solid border-[#DDDDDD] rounded-tl-[50px] flex flex-col justify-end md:h-44 h-32 pb-8'>
            <p className='regular text-4xl m-0'>Services</p>
            <p className='text-xl m-0'>What we offer</p>
        </div>
        <div className='md:px-16 md:ml-[5%] flex md:flex-row flex-col items-center  py-8 md:py-0 justify-center md:justify-start border border-solid border-[#DDDDDD] md:h-[500px] md:gap-5 gap-8'>
            <div className='flex flex-col md:gap-8 gap-2 justify-center'>
                <div className='group duration-300 rounded-tr-[50px] h-[184px] w-[290px] flex items-center relative shadow-md'>
                    <Image src={'/assets/images/services/architecture-4.jpg'} alt='' fill  className='  object-contain rounded-tr-[50px]' />
                    <div className='duration-500 group-hover:opacity-100 bg-white/70 blur-md backdrop-blur-lg absolute left-0 top-0 h-full w-full rounded-tr-[50px] opacity-0' />
                    <Link href={'/services/architecture'} className='uppercase border-solid border border-[#DDDDDD] border-l-0 tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 md:opacity-0 opacity-100  group-hover:opacity-100 hover:underline absolute z-10'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Architecture</p>
            </div>
            <div className=' flex flex-col md:gap-8 gap-2 justify-center '>
                <div className='group hover:blur-lg duration-300 rounded-tr-[50px] flex items-center relative'>
                    <Image src={'/assets/images/services/interior-2.jpg'} alt='' className='rounded-tr-[50px] h-[184px] w-[290px] ' width={2048} height={1152} />
                    <div className='duration-500 group-hover:opacity-100 bg-white/50 blur-md backdrop-blur-lg absolute left-0 top-0 h-full w-full rounded-tr-[50px] opacity-0' />
                    <Link href={'/services/interior-design'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 md:opacity-0 opacity-100 group-hover:opacity-100 hover:underline absolute z-10'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Interior Design</p>
            </div>
            <div className=' flex flex-col md:gap-8 gap-2 justify-center'>
                <div className='group hover:shadow-md duration-300 rounded-tr-[50px] flex items-center relative'>
                    <Image src={'/assets/images/services/3d-visualization/ampliacion-tipal/1.jpg'} alt='' width={2048} height={1152}  className='rounded-tr-[50px] h-[184px] w-[290px]' />
                    <div className='duration-500 group-hover:opacity-100 bg-white/50 blur-md backdrop-blur-lg absolute left-0 top-0 h-full w-full rounded-tr-[50px] opacity-0' />
                    <Link href={'/services/3d-visualization'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 md:opacity-0 opacity-100  group-hover:opacity-100 hover:underline absolute z-10'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>3d visualization</p>
            </div>
            <div className=' flex flex-col md:gap-8 gap-2 justify-center'>
                <div className='group hover:shadow-md duration-300 rounded-tr-[50px] flex items-center relative shadow-md'>
                    <Image src={'/assets/images/services/modeling-1.jpg'} alt='' width={2048} height={1152}  className='rounded-tr-[50px] h-[184px] w-[290px] object-contain object-[40%]' />
                    <div className='duration-500 group-hover:opacity-100 bg-white/70 blur-md backdrop-blur-lg absolute left-0 top-0 h-full w-full rounded-tr-[50px] opacity-0' />
                    <Link href={'/services/modeling'} className='uppercase border-solid border border-[#DDDDDD] border-l-0 tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 md:opacity-0 opacity-100  group-hover:opacity-100 hover:underline absolute z-10'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Modeling</p>
            </div>
        </div>
    </div>
  )
}

export default Services