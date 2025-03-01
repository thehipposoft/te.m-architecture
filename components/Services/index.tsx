import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='pt-24'>
        <div id='services' className='ml-[5%] pl-16 border border-b-0 rounded-tl-3xl flex flex-col justify-end h-44 pb-8'>
            <p className='regular text-4xl'>Services</p>
            <p className='text-xl'>What we offer</p>
        </div>
        <div className='px-16 ml-[5%] flex border h-[500px] gap-5'>
            <div className='flex flex-col gap-10 justify-center'>
                <div className='group bg-black/30 h-[184px] w-[290px] rounded-tr-3xl duration-300 flex items-center'>
                    <Link href={'/services/architecture'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 opacity-0 group-hover:opacity-100 hover:underline'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Architecture</p>
            </div>
            <div className=' flex flex-col gap-10 justify-center '>
                <div className='group bg-black/30 h-[184px] w-[290px] rounded-tr-3xl flex items-center'>
                    <Link href={'/services/interior-design'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 opacity-0 group-hover:opacity-100 hover:underline'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Interior Design</p>
            </div>
            <div className=' flex flex-col gap-10 justify-center'>
                <div className='group bg-black/30 h-[184px] w-[290px] rounded-tr-3xl flex items-center'>
                    <Link href={'/services/3d-visualization'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 opacity-0 group-hover:opacity-100 hover:underline'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>3d visualization</p>
            </div>
            <div className=' flex flex-col gap-10 justify-center'>
                <div className='group bg-black/30 h-[184px] w-[290px] rounded-tr-3xl flex items-center'>
                    <Link href={'/services/modeling'} className='uppercase tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-white duration-500 opacity-0 group-hover:opacity-100 hover:underline'>learn more
                        <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
                    </Link>
                </div>
                <p className='uppercase'>Modeling</p>
            </div>
        </div>
    </div>
  )
}

export default Services