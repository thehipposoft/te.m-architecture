'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FadeSlider = () => {

    const SLIDER_DATA = [
        {
            name: 'Silu Wasi',
            category: 'boutique hotel',
            image: '/assets/images/projects/silu-wasi/01.webp',
            href: '/projects/silu-wasi',
        },
        {
            name: 'Casa Patio',
            category: 'craft beer brewery',
            image: '/assets/images/projects/casa-patio/01.webp',
            href: '/projects/casa-patio',
        },
        {
            name: 'Vallista',
            category: 'craft beer brewery',
            image: '/assets/images/projects/vallista/01.webp',
            href: '/projects/vallista',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        if (currentIndex != 2) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0)
        }
    }

    const handlePrev = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(2)
        }
    }


  return (
    <div className='md:w-[1200px] mx-auto flex md:flex-row flex-col-reverse items-center justify-between pt-[25%] md:pt-0'>
        <div className='flex flex-col gap-6 justify-between md:h-[475px] pt-[5%]'>
            <div className='flex flex-col relative w-[365px]'>
                <div className={` ${currentIndex === 0 ? 'opacity-100 ' : 'opacity-0'} duration-500 flex flex-col absolute top-0`}>
                    <h4 className='uppercase text-[#DDDDDD] text-xl light'>{SLIDER_DATA[currentIndex].category}</h4>
                    <h2 className='md:text-[60px] text-3xl uppercase text-[#DDDDDD] light md:leading-[65px]'>{SLIDER_DATA[currentIndex].name}</h2>
                </div>
                <div className={` ${currentIndex === 1 ? 'opacity-100 ' : 'opacity-0'}  duration-500 flex flex-col absolute  top-0`}>
                    <h4 className='uppercase text-[#DDDDDD] text-xl light opacity-0'>{SLIDER_DATA[currentIndex].category}</h4>
                    <h2 className='md:text-[60px] text-3xl uppercase text-[#DDDDDD] light md:leading-[65px]'>{SLIDER_DATA[currentIndex].name}</h2>
                </div>
                <div className={` ${currentIndex === 2 ? 'opacity-100 ' : 'opacity-0'} duration-500 flex flex-col absolute  top-0`}>
                    <h4 className='uppercase text-[#DDDDDD] text-xl light '>{SLIDER_DATA[currentIndex].category}</h4>
                    <h2 className='md:text-[60px] text-3xl uppercase text-[#DDDDDD] light md:leading-[65px]'>{SLIDER_DATA[currentIndex].name}</h2>
                </div>
                <p className='bold md:text-[35px] text-[#333333] relative top-16'>Salta, argentina</p>
            </div>
            <div className='flex flex-col md:gap-12 gap-8'>
                <div className='flex relative pt-12 border-b border-[#f2f2f2]'>
                    <div onClick={handlePrev} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center mr-4'>
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 4.5a.5.5 0 0 0-.5-.5h-16a.5.5 0 0 0 0 1h16a.5.5 0 0 0 .5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M5.354.646a.5.5 0 0 0-.708 0L.793 4.5l3.853 3.854a.5.5 0 1 0 .708-.708L2.207 4.5l3.147-3.146a.5.5 0 0 0 0-.708Z" fill="#333"/></svg>
                    </div>
                    <div onClick={handleNext} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center'>
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.935 4.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1h-16a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M13.582.646a.5.5 0 0 1 .707 0L18.142 4.5 14.29 8.354a.5.5 0 1 1-.707-.708L16.727 4.5l-3.147-3.146a.5.5 0 0 1 0-.708Z" fill="#333"/></svg>
                    </div>
                    <div className='h-[1px] w-72 bg-[#f2f2f2] absolute bottom-0' />
                </div>
                <div className='flex gap-8'>
                    <span className='text-2xl text-[#BDBDBD]'>0{currentIndex + 1}</span>
                    <span className='text-2xl text-[#BDBDBD]'>/</span>
                    <span className='text-2xl text-[#BDBDBD]'>03</span>
                </div>
            </div>
        </div>
        <div className='relative drop-shadow-lg md:w-[705px] w-[85vw] md:h-[729px] h-[55vh]'>
            <Image src={SLIDER_DATA[0].image} alt={`${SLIDER_DATA[0].name} project image`} width={1021} height={1052} className={`duration-1000 ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}  w-full h-full rounded-tl-[20px] rounded-tr-3xl md:rounded-tr-[200px] object-cover absolute left-0 top-0`} />
            <Image src={SLIDER_DATA[1].image} alt={`${SLIDER_DATA[1].name} project image`} width={1021} height={1052} className={`duration-1000 ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'} w-full h-full rounded-tl-[20px] rounded-tr-3xl md:rounded-tr-[200px] object-cover absolute left-0 top-0`} />
            <Image src={SLIDER_DATA[2].image} alt={`${SLIDER_DATA[2].name} project image`} width={1021} height={1052} className={`duration-1000 ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'} w-full h-full rounded-tl-[20px] rounded-tr-3xl md:rounded-tr-[200px] object-cover absolute left-0 top-0`} />
            <Link href={SLIDER_DATA[currentIndex].href} className='uppercase roboto tracking-[2px] text-[#333333] text-xs flex items-center px-10 hover:underline gap-4 py-6 bg-white absolute bottom-0 left-0 shadow-lg'>view project
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
            </Link>
        </div>
    </div>
  )
}

export default FadeSlider