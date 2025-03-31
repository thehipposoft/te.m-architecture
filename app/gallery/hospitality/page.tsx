import GalleryCard from '@/components/Services/GalleryCard'
import React from 'react'

const SILU_WASI = [
  {
      src: '/assets/images/projects/silu-wasi/1-fw.webp',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/2.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/3.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/4.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/5.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/6.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/silu-wasi/7.jpg',
      alt: '',
  },
  { 
      src: '/assets/images/projects/silu-wasi/8.jpg',
      alt: '',
  },
]

function HospitalityGalleryPage () {
  return (
    <div>
      <div className='flex flex-col md:w-[1170px] w-[85vw] mx-auto md:py-16 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Hospitality Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='md:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='asd' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/2.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#333333' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/3.jpg' imageAlt='asd' width='270px' height='255px' expandColor='#333333' rounded />
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/4.jpg' imageAlt='asd' width='470px' height='255px' expandColor='#333333' rounded />
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/5.jpg' imageAlt='asd' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='md:hidden'>
          <GalleryCard gallery={SILU_WASI} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='asd' width='85vw' height='455px' expandColor='#FFFFFF' rounded />
        </div>
    </div>
    </div>
  )
}

export default HospitalityGalleryPage