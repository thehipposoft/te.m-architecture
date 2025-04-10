import React from 'react'

const ServicesLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className=''>
        <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto md:py-12 pt-[25%]'>
            <div className='flex flex-col gap-2 pb-12'>
                <h1 className='uppercase text-[#DDDDDD] light md:text-[64px] leading-10'>Our Services</h1>
                <h2 className='bolde text-[35px]'>What we offer</h2>
                <div className='w-full h-[1px] bg-[#DDDDDD]' />
            </div>
            {children}
        </div>
    </div>
  )
}

export default ServicesLayout