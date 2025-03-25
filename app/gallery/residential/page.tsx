import GalleryCard from '@/components/Services/GalleryCard'
import React from 'react'

const CASA_PATIO = [
  {
      src: '/assets/images/projects/casa-patio/1.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/2.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/3.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/4.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/5.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/6.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/casa-patio/7.jpg',
      alt: '',
  },
  { 
      src: '/assets/images/projects/casa-patio/8.jpg',
      alt: '',
  },
  { 
      src: '/assets/images/projects/casa-patio/9.jpg',
      alt: '',
  },
]

function ResidentialGalleryPage () {
  return (
    <div className='flex flex-col md:w-[1170px] w-[85vw] mx-auto md:py-20 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Residential Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='md:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/1.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/2.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/3.jpg' imageAlt='asd' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/4.jpg' imageAlt='asd' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/5.jpg' imageAlt='asd' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='md:hidden'>
            <GalleryCard gallery={CASA_PATIO} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/1.jpg' imageAlt='asd' width='85vw' height='455px' expandColor='#333333' rounded />
        </div>
    </div>
  )
}

export default ResidentialGalleryPage