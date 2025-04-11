import GalleryCard from '@/components/Services/GalleryCard'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Te. M Architecture | Hospitality Gallery',
  description: 'Every space has a purpose. We design with that in mind. Check our gallery.',
}

const SILU_WASI = [
  {
      src: '/assets/images/projects/silu-wasi/1-fw.webp',
      alt: 'Hotel Silu Wasi 1',
  },
  {
      src: '/assets/images/projects/silu-wasi/2.jpg',
      alt: 'Hotel Silu Wasi 2',
  },
  {
      src: '/assets/images/projects/silu-wasi/3.jpg',
      alt: 'Hotel Silu Wasi 3',
  },
  {
      src: '/assets/images/projects/silu-wasi/4.jpg',
      alt: 'Hotel Silu Wasi 4',
  },
  {
      src: '/assets/images/projects/silu-wasi/5.jpg',
      alt: 'Hotel Silu Wasi 5',
  },
  {
      src: '/assets/images/projects/silu-wasi/6.jpg',
      alt: 'Hotel Silu Wasi 6',
  },
  {
      src: '/assets/images/projects/silu-wasi/7.jpg',
      alt: 'Hotel Silu Wasi 7',
  },
  { 
      src: '/assets/images/projects/silu-wasi/8.jpg',
      alt: 'Hotel Silu Wasi 8',
  },
]

function HospitalityGalleryPage () {
  return (
    <div>
      <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto lg:pb-8 pb-8 md:py-28 lg:pt-8 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Hospitality Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='lg:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='Hotel Silu Wasi' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/2.jpg' imageAlt='Hotel Silu Wasi' width='570px' height='255px' expandColor='#333333' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/3.jpg' imageAlt='Hotel Silu Wasi' width='270px' height='255px' expandColor='#333333' rounded />
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/4.jpg' imageAlt='Hotel Silu Wasi' width='470px' height='255px' expandColor='#333333' rounded />
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/5.jpg' imageAlt='Hotel Silu Wasi' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='lg:hidden'>
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='Hotel Silu Wasi' width='85vw' height='455px' expandColor='#FFFFFF' rounded />
        </div>
    </div>
    </div>
  )
}

export default HospitalityGalleryPage