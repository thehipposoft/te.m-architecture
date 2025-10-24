'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ProyectosData } from '@/src/types';

const FadeSlider = ({
    proyectosData
}: ProyectosData) => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.first__ > *',
            {
                opacity: 0,
                ease: 'power3.out',
                y: 20,
                delay: .7,
                stagger: .3,
                duration: 1,
             });
        gsap.from('.second__' , {
            opacity: 0,
            ease: 'sine.in',
            delay: 1,
            duration: 1,
        })
    },{ scope: container });

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        if (currentIndex != proyectosData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0)
        }
    }

    const handlePrev = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(proyectosData.length - 1);
        }
    }

    return (
        <div ref={container} className='md:w-[85vw] 2xl:w-[1300px] mx-auto flex lg:flex-row flex-col-reverse items-center justify-between pt-[25%] md:pt-8 lg:pt-0'>
            <div className='first__ flex lg:flex-col flex-col md:flex-row gap-6 justify-between lg:h-[420px] w-[85vw] lg:w-auto pt-5 lg:pt-0'>
                <div className='flex flex-col relative w-[365px]'>
                    {
                        proyectosData.map((project, index) => (
                            <div key={project.id} className={`${currentIndex === index ? 'opacity-100 ' : 'opacity-0'} duration-500 flex flex-col absolute top-0`}>
                                <h4 className='uppercase text-[#DDDDDD] text-xl light'>{project.tipo_proyecto}</h4>
                                <h2 className='md:text-[60px] text-3xl uppercase text-[#DDDDDD] light md:leading-[65px]'>{project.nombre_abreviado}</h2>
                            </div>
                        ))
                    }
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
                        <div className='h-[1px] lg:w-72 md:w-36 bg-[#f2f2f2] absolute bottom-0' />
                    </div>
                    <div className='flex gap-8'>
                        <span className='text-2xl text-[#BDBDBD]'>0{currentIndex + 1}</span>
                        <span className='text-2xl text-[#BDBDBD]'>/</span>
                        <span className='text-2xl text-[#BDBDBD]'>0{proyectosData.length}</span>
                    </div>
                </div>
            </div>
            <div className='second__ relative drop-shadow-lg lg:w-[705px] w-[85vw] lg:h-[729px] h-[55vh] md:h-[60vh] bg-black/70 rounded-tr-3xl md:rounded-tr-[200px] rounded-tl-[20px]'>
                {
                    proyectosData.map((project, index) => (
                        <Image key={project.id} priority src={project.imagen_principal_banner} alt={`${project.nombre} project image`} fill sizes="(max-width: 1200px) 85vw, 705px" className={`duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'} w-full h-full rounded-tl-[20px] rounded-tr-3xl md:rounded-tr-[200px] object-cover absolute left-0 top-0`} />
                    ))
                }
                <Link
                    href={`projects/${proyectosData[currentIndex].id}`}
                    className={`group uppercase roboto hover:bg-transparent  text-[#333333] duration-700 text-xs flex items-center px-10 gap-4 py-4 bg-white absolute bottom-0 left-0 shadow-lg`}>
                        <p className={`relative overflow-hidden tracking-[2px] after:duration-700 after:content-[''] after:absolute after:bg-white after:h-[1px] after:w-full after:bottom-0 after:-left-full group-hover:after:left-0 group-hover:text-white`}>view project</p>
                        <svg  width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='group-hover:fill-white' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path className='group-hover:fill-white' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                </Link>
            </div>
        </div>
    )
}

export default FadeSlider