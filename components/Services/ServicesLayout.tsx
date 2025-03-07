import Image from 'next/image'
import React from 'react'

type ServicesLayoutDataType = {
    imageOne: any,
    imageTwo: any,
    title: string,
    text: any,
    endImageLayout: any,
}

const ServicesLayout = ({imageOne, imageTwo, title, text, endImageLayout}:ServicesLayoutDataType) => {
  return (
    <div className='flex flex-col gap-4'>
        {imageOne}
        <div className='flex items-center gap-8'>
            {imageTwo}
            <div className='flex flex-col w-[685px]'>
                <h1 className='bold text-xl uppercase'>{title}</h1>
                {text}
            </div>
        </div>
        {endImageLayout}
    </div>
  )
}

export default ServicesLayout