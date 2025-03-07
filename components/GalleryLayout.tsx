import React from 'react'
import Image from 'next/image'

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
        <div className='flex flex-col gap-6'>
          <div className='flex gap-6'>
            <Image src={'/assets/images/projects/silu-wasi/3.jpg'} alt='' width={1374} height={700} className='md:w-[570px] h-[255px] object-cover rounded-tr-[20px]' />
            <Image src={'/assets/images/projects/silu-wasi/3.jpg'} alt='' width={1374} height={700} className='md:w-[570px] h-[255px] object-cover rounded-tr-[20px]' />
          </div>
          <div className='flex gap-6 justify-between'>
            <Image src={'/assets/images/projects/silu-wasi/3.jpg'} alt='' width={1374} height={700} className='md:w-[270px] h-[255px] object-cover rounded-tr-[20px]' />
            <Image src={'/assets/images/projects/silu-wasi/3.jpg'} alt='' width={1374} height={700} className='md:w-[470px] h-[255px] object-cover rounded-tr-[20px]' />
            <Image src={'/assets/images/projects/silu-wasi/3.jpg'} alt='' width={1374} height={700} className='md:w-[370px] h-[255px] object-cover rounded-tr-[20px]' />
          </div>
        </div>
    </div>
  )
}

export default GalleryLayout