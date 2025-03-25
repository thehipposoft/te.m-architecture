import React from 'react'
import GalleryCard from '@/components/Services/GalleryCard'

const VALLISTA = [
  {
      src: '/assets/images/projects/vallista/1.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/vallista/2.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/vallista/3.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/vallista/4.jpg',
      alt: '',
  },
  {
      src: '/assets/images/projects/vallista/5.jpg',
      alt: '',
  },
]

function IndustrialGalleryPage () {
  return (
    <div className='flex flex-col md:w-[1170px] w-[85vw] mx-auto md:py-20 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light md:text-[64px] md:leading-10 leading-[55px]'>Industrial Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='md:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/1.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/2.jpg' imageAlt='asd' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/4.jpg' imageAlt='asd' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/3.jpg' imageAlt='asd' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/5.jpg' imageAlt='asd' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='md:hidden'>
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/1.jpg' imageAlt='asd' width='85vw' height='455px' expandColor='#FFFFFF' rounded />
        </div>
    </div>
  )
}

export default IndustrialGalleryPage