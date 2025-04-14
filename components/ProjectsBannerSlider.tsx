'use client'
import Image from 'next/image';
import React, { useState } from 'react'

type ProjectImagesType = {
    gallery: object[],
}


const ProjectsBannerSlider = ({gallery}:ProjectImagesType) => {

const [currentIndex, setCurrentIndex] = useState<number>(0)

const handleNext = () => {
    if (currentIndex != gallery.length - 1) {
        setCurrentIndex(currentIndex + 1);
    } else {
        setCurrentIndex(0)
    }
}

const handlePrev = () => {
    if (currentIndex != 0) {
        setCurrentIndex(currentIndex - 1);
    } else {
        setCurrentIndex(gallery.length - 1)
    }
}

  return (
    <div className='flex flex-col relative'>
        <div className='md:w-screen w-[85vw] mx-auto md:mx-0 md:h-[675px] h-[70vh] relative flex items-end bg-black/70 rounded-tr-3xl md:rounded-tr-[200px]'>
            {
                gallery.map((val:any, index:number) => (
                    <div key={index}>
                        <Image src={val.src} alt='' fill className={`md:duration-1000 duration-500 ${currentIndex === index ? 'opacity-100  ' : 'opacity-0'} object-cover rounded-tr-3xl md:rounded-tr-[200px]`} />
                    </div>
                ))
            }
            <div className='flex items-center md:pb-10 md:pl-[8%] border-b border-[#f2f2f2] relative z-10'>
                <div onClick={handlePrev} className='border group hover:bg-transparent border-[#f2f2f2] border-solid cursor-pointer bg-[#F9F9F9] duration-300 w-12 h-12 flex justify-center items-center'>
                    <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='group-hover:fill-white duration-300' fillRule="evenodd" clipRule="evenodd" d="M18 4.5a.5.5 0 0 0-.5-.5h-16a.5.5 0 0 0 0 1h16a.5.5 0 0 0 .5-.5Z" fill="#333"/><path className='group-hover:fill-white duration-300'  fillRule="evenodd" clipRule="evenodd" d="M5.354.646a.5.5 0 0 0-.708 0L.793 4.5l3.853 3.854a.5.5 0 1 0 .708-.708L2.207 4.5l3.147-3.146a.5.5 0 0 0 0-.708Z" fill="#333"/></svg>
                </div>
                <div onClick={handleNext} className='ml-4 border group hover:bg-transparent border-[#f2f2f2] border-solid cursor-pointer bg-[#F9F9F9] duration-300 w-12 h-12 flex justify-center items-center'>
                    <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='group-hover:fill-white duration-300' fillRule="evenodd" clipRule="evenodd" d="M.935 4.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1h-16a.5.5 0 0 1-.5-.5Z" fill="#333"/><path className='group-hover:fill-white duration-300'  fillRule="evenodd" clipRule="evenodd" d="M13.582.646a.5.5 0 0 1 .707 0L18.142 4.5 14.29 8.354a.5.5 0 1 1-.707-.708L16.727 4.5l-3.147-3.146a.5.5 0 0 1 0-.708Z" fill="#333"/></svg>
                </div>
                <div className='h-[1px] w-72 bg-white' />
            </div>
        </div>
        <div className='flex gap-8 pt-8 pl-20'>
            <span className='text-2xl text-[#BDBDBD]'>0{currentIndex + 1}</span>
            <div className='w-[2px] h-10 rotate-12 bg-[#BDBDBD]'/>
            <span className='text-2xl text-[#BDBDBD]'>0{gallery.length}</span>
        </div>
    </div>
  )
}

export default ProjectsBannerSlider