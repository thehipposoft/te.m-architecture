import GalleryCard from '@/components/Services/GalleryCard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te.M Architecture | Residential Gallery',
  description: 'Every space has a purpose. We design with that in mind. Check our gallery.',
}

const CASA_PATIO = [
  {
      src: '/assets/images/projects/casa-patio/1.jpg',
      alt: 'Residencia Casa Patio 1',
  },
  {
      src: '/assets/images/projects/casa-patio/2.jpg',
      alt: 'Residencia Casa Patio 2',
  },
  {
      src: '/assets/images/projects/casa-patio/3.jpg',
      alt: 'Residencia Casa Patio 3',
  },
  {
      src: '/assets/images/projects/casa-patio/4.jpg',
      alt: 'Residencia Casa Patio 4',
  },
  {
      src: '/assets/images/projects/casa-patio/5.jpg',
      alt: 'Residencia Casa Patio 5',
  },
  {
      src: '/assets/images/projects/casa-patio/6.jpg',
      alt: 'Residencia Casa Patio 6',
  },
  {
      src: '/assets/images/projects/casa-patio/7.jpg',
      alt: 'Residencia Casa Patio 7',
  },
  {
      src: '/assets/images/projects/casa-patio/8.jpg',
      alt: 'Residencia Casa Patio 8',
  },
  {
      src: '/assets/images/projects/casa-patio/9.jpg',
      alt: 'Residencia Casa Patio 9',
  },
]

function ResidentialGalleryPage () {
  return (
    <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto lg:pb-8 pb-8 md:py-28 lg:pt-8 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Residential Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='lg:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/1.jpg' imageAlt='Residencia "Casa Patio"' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/2.jpg' imageAlt='Residencia "Casa Patio"' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/3.jpg' imageAlt='Residencia "Casa Patio"' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/4.jpg' imageAlt='Residencia "Casa Patio"' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/5.jpg' imageAlt='Residencia "Casa Patio"' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='lg:hidden'>
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/1.jpg' imageAlt='Residencia "Casa Patio"' width='85vw' height='455px' expandColor='#333333' rounded />
        </div>
    </div>
  )
}

export default ResidentialGalleryPage