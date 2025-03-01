import Image from 'next/image'
import React from 'react'

type ServicesLayoutDataType = {
    imageOne: string,
    imageTwo: string,
    title: string,
    text: any,
    imageThree: string,
}

const ServicesLayout = ({imageOne, imageTwo, title, text, imageThree}:ServicesLayoutDataType) => {
  return (
    <div className='flex flex-col gap-4'>
        <Image src={imageOne} alt='' width={1170} height={435} />
        <div className='flex gap-4'>
            <Image src={imageTwo} alt='' width={419} height={428} />
            <div className='flex flex-col gap-2'>
                <h1 className='bold text-xl uppercase'>{title}</h1>
                {text}
            </div>
        </div>
        <Image src={imageThree} alt='' width={1170} height={435} />
    </div>
  )
}

export default ServicesLayout