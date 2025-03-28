import React from 'react'
import ServicesTiles from './ServicesTiles'

const Services = () => {
  return (
    <div className='pt-24 pb-24 md:pb-0 md:w-auto w-[90vw] mx-auto md:mx-0'>
        <div id='services' className='md:ml-[5%] pl-16 border border-b-0 border-solid border-[#DDDDDD] rounded-tl-[50px] flex flex-col justify-end md:h-44 h-32 pb-8'>
            <p className='regular text-4xl m-0'>Services</p>
            <p className='text-xl m-0'>What we offer</p>
        </div>
        <ServicesTiles />
    </div>
  )
}

export default Services