import GalleryCard from '@/components/Services/GalleryCard'
import React from 'react'

const INTERIOR_DESIGN = [
  {
      src: '/assets/images/services/interior-1.jpg',
      alt: '',
  },
  {
      src: '/assets/images/services/interior-2.jpg',
      alt: '',
  },
  {
      src: '/assets/images/services/interior-3.jpg',
      alt: '',
  },
  {
      src: '/assets/images/services/interior-4.jpg',
      alt: '',
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
            <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-1.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#FFFFFF' rounded />
            <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-2.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6'>
          <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-3.jpg' imageAlt='asd' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={INTERIOR_DESIGN} titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-4.jpg' imageAlt='asd' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
        </div>
        <div className='lg:hidden'>
            <GalleryCard gallery={INTERIOR_DESIGN} title='Interior Design' titleColor='#FFFFFF' imageSrc='/assets/images/services/interior-1.jpg' imageAlt='asd' width='85vw' height='455px' expandColor='#333333' rounded />
        </div>
    </div>
  )
}

export default InteriorDesignGalleryPage