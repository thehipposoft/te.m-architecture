import GalleryCard from '@/components/Services/GalleryCard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te.M Architecture | Interior Design Gallery',
  description: 'Every space has a purpose. We design with that in mind. Check our gallery.',
}

const INTERIOR_DESIGN = [
  {
      src: '/assets/images/services/interior-1.jpg',
      alt: 'Diseño de interiores 1',
  },
  {
      src: '/assets/images/services/interior-2.jpg',
      alt: 'Diseño de interiores 2',
  },
  {
      src: '/assets/images/services/interior-3.jpg',
      alt: 'Diseño de interiores 3',
  },
  {
      src: '/assets/images/services/interior-4.jpg',
      alt: 'Diseño de interiores 4',
  },
]

function InteriorDesignGalleryPage () {
  return (
    <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto lg:pb-8 pb-8 md:py-28 lg:pt-8 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Interior Design Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='lg:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-1.jpg' imageAlt='Diseño de interiores' width='570px' height='255px' expandColor='#FFFFFF' rounded />
            <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-2.jpg' imageAlt='Diseño de interiores' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6'>
          <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-3.jpg' imageAlt='Diseño de interiores' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-4.jpg' imageAlt='Diseño de interiores' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
        </div>
        <div className='lg:hidden'>
            <GalleryCard gallery={INTERIOR_DESIGN} title='Interior Design' titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-1.jpg' imageAlt='Diseño de interiores' width='85vw' height='455px' expandColor='#333333' rounded />
        </div>
    </div>
  )
}

export default InteriorDesignGalleryPage