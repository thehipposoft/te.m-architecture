import React from 'react'
import GalleryCard from '@/components/Services/GalleryCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te. M Architecture | Industrial Gallery',
  description: 'Every space has a purpose. We design with that in mind. Check our gallery.',
}

const VALLISTA = [
  {
      src: '/assets/images/projects/vallista/1.jpg',
      alt: 'Cervezeria Artesanal Vallista 1',
  },
  {
      src: '/assets/images/projects/vallista/2.jpg',
      alt: 'Cervezeria Artesanal Vallista 1',
  },
  {
      src: '/assets/images/projects/vallista/3.jpg',
      alt: 'Cervezeria Artesanal Vallista 1',
  },
  {
      src: '/assets/images/projects/vallista/4.jpg',
      alt: 'Cervezeria Artesanal Vallista 1',
  },
  {
      src: '/assets/images/projects/vallista/5.jpg',
      alt: 'Cervezeria Artesanal Vallista 1',
  },
]

function IndustrialGalleryPage () {
  return (
    <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto lg:pb-8 pb-8 md:py-28 lg:pt-8 pt-[25%]'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light md:text-[64px] md:leading-10 leading-[55px]'>Industrial Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
        <div className='lg:flex hidden flex-col gap-6'>
          <div className='flex gap-6'>
            <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/1.jpg' imageAlt='Carvezeria Artesanal Vallista' width='570px' height='255px' expandColor='#333333' rounded />
            <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/2.jpg' imageAlt='Carvezeria Artesanal Vallista' width='570px' height='255px' expandColor='#FFFFFF' rounded />
          </div>
          <div className='flex gap-6 justify-between'>
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/4.jpg' imageAlt='Carvezeria Artesanal Vallista' width='270px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/3.jpg' imageAlt='Carvezeria Artesanal Vallista' width='470px' height='255px' expandColor='#FFFFFF' rounded />
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/5.jpg' imageAlt='Carvezeria Artesanal Vallista' width='370px' height='255px' expandColor='#333333' rounded />
          </div>
        </div>
        <div className='lg:hidden'>
          <GalleryCard gallery={VALLISTA} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/1.jpg' imageAlt='Carvezeria Artesanal Vallista' width='85vw' height='455px' expandColor='#FFFFFF' rounded />
        </div>
    </div>
  )
}

export default IndustrialGalleryPage