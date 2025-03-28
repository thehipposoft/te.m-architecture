'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type Image = {
    src: string,
    alt: string,
}

type GalleryType = {
    images: Image[]
}

const SimpleGallery = ({images}:GalleryType) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex != 1) {
        setCurrentIndex(currentIndex + 1);
    } else {
        setCurrentIndex(0)
    }
}

const handlePrev = () => {
    if (currentIndex != 0) {
        setCurrentIndex(currentIndex - 1);
    } else {
        setCurrentIndex(1)
    }
}

  return (
    <div className='flex flex-col '>
        <div className='md:w-[746px] w-[85vw] md:h-[526px] h-[45vh] relative'>
            {
              images.map((val, index) => (
                <Image
                  src={val.src}
                  alt={val.alt}
                  key={index}
                  fill
                  className={`${currentIndex === index ? 'opacity-100' : 'opacity-0'} duration-700`}
                 />
              ))
            }
        </div>
        <div className='flex md:justify-end relative border-b border-[#f2f2f2]'>
            <div onClick={handlePrev} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center mr-4'>
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 4.5a.5.5 0 0 0-.5-.5h-16a.5.5 0 0 0 0 1h16a.5.5 0 0 0 .5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M5.354.646a.5.5 0 0 0-.708 0L.793 4.5l3.853 3.854a.5.5 0 1 0 .708-.708L2.207 4.5l3.147-3.146a.5.5 0 0 0 0-.708Z" fill="#333"/></svg>
            </div>
            <div onClick={handleNext} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center'>
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.935 4.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1h-16a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M13.582.646a.5.5 0 0 1 .707 0L18.142 4.5 14.29 8.354a.5.5 0 1 1-.707-.708L16.727 4.5l-3.147-3.146a.5.5 0 0 1 0-.708Z" fill="#333"/></svg>
            </div>
        </div>
    </div>
  )
}

export default SimpleGallery