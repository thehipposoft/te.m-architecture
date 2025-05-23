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
        <div className='flex flex-col-reverse lg:flex-row items-center md:gap-8 gap-4'>
            {imageTwo}
            <div className='flex flex-col lg:w-[685px] w-[85vw] pt-12'>
                <h1 className='bold text-xl uppercase'>{title}</h1>
                {text}
            </div>
        </div>
        {endImageLayout}
    </div>
  )
}

export default ServicesLayout