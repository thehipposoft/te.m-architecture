import React from 'react'

type GalleryLayoutTypes = {
    title: string,
}

const GalleryLayout = ({title}:GalleryLayoutTypes) => {
  return (
    <div className='flex flex-col md:w-[1170px] mx-auto py-20'>
        <div className='flex flex-col gap-4 pb-12'>
            <h1 className='text-[#DDDDDD] light text-[64px] leading-10'>{title} Projects</h1>
            <h2 className='bolde text-[35px]'>Gallery</h2>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
        </div>
    </div>
  )
}

export default GalleryLayout