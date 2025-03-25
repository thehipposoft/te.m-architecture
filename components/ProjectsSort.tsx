import React from 'react'
import Link from 'next/link';

const ProjectsSort = () => {
  return (
    <div className='md:h-[500px] h-[700px] flex justify-center items-center md:items-start overflow-hidden relative w-[85vw] md:w-auto md:mx-0 mx-auto' id='projects'>
        <div className='bg-[#c4c4c4] opacity-20 w-[75vw] md:h-[800px] rounded-t-full absolute left-0 -top-32'/>
        <div className='bg-[rgb(196,196,196)] opacity-20 w-[75vw] md:h-[800px] rounded-t-full absolute right-0 -top-32'/>
        <div className='md:w-[1050px] md:pt-40 flex flex-col gap-4 relative z-[2]'>
            <p className='regular text-4xl m-0'>Technical Expertise & Integrated Studio</p>
            <p className='text-xl m-0'>Every space has a purpose. We design with that in mind.</p>
            <div className='flex flex-col md:flex-row gap-8 md:pl-[5%] pt-4'>
                <Link href={'/gallery/industrial'} className='uppercase group hover:text-[#333333] roboto tracking-[2px] border border-solid border-[#333333] duration-500 hover:bg-transparent bg-[#333333] text-white px-8 text-xs  py-6 flex items-center gap-6'>
                  Industrial
                  <svg  width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#fff"/><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#fff"/></svg>
                </Link>
                <Link href={'/gallery/residential'} className='uppercase group hover:text-[#333333] roboto tracking-[2px] border border-solid border-[#333333] duration-500 hover:bg-transparent bg-[#333333] text-white px-8 text-xs  py-6 flex items-center gap-6'>Residential
                  <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#fff"/><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#fff"/></svg>
                </Link>
                <Link href={'/gallery/hospitality'} className='uppercase group hover:text-[#333333] roboto tracking-[2px] border border-solid border-[#333333] duration-500 hover:bg-transparent bg-[#333333] text-white px-8 text-xs  py-6 flex items-center gap-6'>Hospitality
                  <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#fff"/><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#fff"/></svg>
                </Link>
                <Link href={'/gallery/interior-design'} className='uppercase group hover:text-[#333333] roboto tracking-[2px] border border-solid border-[#333333] duration-500 hover:bg-transparent bg-[#333333] text-white px-8 text-xs  py-6 flex items-center gap-6'>Interior Design
                  <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#fff"/><path className='duration-500 group-hover:fill-[#333]' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#fff"/></svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSort;