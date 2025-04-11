'use client'
import React, { useState } from 'react'
import GalleryCard from '../Services/GalleryCard'
import Image from 'next/image'
import { CASA_RAFITA, DM, DON_MARTIN, CARNEGIE_HOUSE, INSTITUTO_FRANKLIN } from '../../app/services/3d-visualization/constants';


const VisualizationGallery = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === 1) return 0;
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0) return 1;
            return index - 1;
        })
    }



  return (
    <div className='flex flex-col'>
        <div className='flex relative h-[880px] w-[1170px]'>
            <div 
                className={`${currentIndex === 0 ? 'opacity-100 z-30' : 'opacity-0'} grid grid-cols-3 grid-rows-10 h-[880px] duration-700 w-[1170px] gap-5 absolute`}
            >
                <div className='row-span-4 relative'>
                    <GalleryCard gallery={CASA_RAFITA} title='Casa Rafita by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/casa-rafita/1.jpg' imageAlt='Visualizacion 3d: Casa Rafita' width='100%' height='100%' expandColor='#505050' rounded absolute/>
                </div>
                <div className='row-span-3 relative'>
                    <GalleryCard gallery={DM} title='DM by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/dm/1.jpg' imageAlt='Visualizacion 3d: DM Sandwicheria' width='100%' height='100%' expandColor='#FFFFFF' rounded absolute/>
                </div>
                <div className='row-span-5 relative'>
                    <GalleryCard gallery={DON_MARTIN} title='Restaurante Don Martin by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/don-martin/1.jpg' imageAlt='Visualizacion 3d: Don Martin' width='100%' height='100%' expandColor='#505050' rounded absolute />
                </div>
                <div className='row-span-4 relative '>
                    <Image src={'/assets/images/services/3d-visualization/dm/2.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/casa-rafita/2.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/don-martin/2.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/casa-rafita/3.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/dm/3.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-2 relative'>
                    <Image src={'/assets/images/services/3d-visualization/don-martin/3.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
            </div>
            <div 
                className={`${currentIndex === 1 ? 'opacity-100 z-30' : 'opacity-0'} grid grid-cols-3 grid-rows-10 h-[880px] duration-700 w-[1170px] gap-5 absolute`}
            >
                <div className='row-span-4 relative'>
                    <GalleryCard gallery={INSTITUTO_FRANKLIN} title='Instituto Franklin by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/instituto-franklin/1.jpg' imageAlt='Visualizacion 3d: Instituto Franklin' width='100%' height='100%' expandColor='#505050' rounded absolute/>
                </div>
                <div className='row-span-3 relative'>
                    <GalleryCard gallery={CARNEGIE_HOUSE} title='Carnegie House by JDALammin Architects' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/carnegie-house/1.jpg' imageAlt='Visualizacion 3d: Carnegie House' width='100%' height='100%' expandColor='#FFFFFF' rounded absolute/>
                </div>
                <div className='row-span-5 relative'>
                </div>
                <div className='row-span-4 relative '>
                    <Image src={'/assets/images/services/3d-visualization/carnegie-house/2.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/instituto-franklin/2.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/instituto-franklin/3.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-3 relative'>
                    <Image src={'/assets/images/services/3d-visualization/carnegie-house/3.jpg'} className='object-cover rounded-xl' fill alt='' />
                </div>
                <div className='row-span-2 relative'>
                </div>
            </div>
        </div>
        <div className='flex pt-4 relative border-b border-[#f2f2f2]'>
            <div onClick={showPrev} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center mr-4'>
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 4.5a.5.5 0 0 0-.5-.5h-16a.5.5 0 0 0 0 1h16a.5.5 0 0 0 .5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M5.354.646a.5.5 0 0 0-.708 0L.793 4.5l3.853 3.854a.5.5 0 1 0 .708-.708L2.207 4.5l3.147-3.146a.5.5 0 0 0 0-.708Z" fill="#333"/></svg>
            </div>
            <div onClick={showNext} className='border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F9F9F9] duration-300 md:w-12 w-16 md:h-12 h-16 flex justify-center items-center'>
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.935 4.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1h-16a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M13.582.646a.5.5 0 0 1 .707 0L18.142 4.5 14.29 8.354a.5.5 0 1 1-.707-.708L16.727 4.5l-3.147-3.146a.5.5 0 0 1 0-.708Z" fill="#333"/></svg>
            </div>
        </div>
    </div>
  )
}

export default VisualizationGallery