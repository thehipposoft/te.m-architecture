import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { PROJECTS } from './constants'

function ProjectsPage () {
  return (
    <div>
      <div className='flex flex-col md:w-[1170px] w-[85vw] mx-auto md:py-16 pt-[25%]'>
            <div className='flex flex-col gap-8 pb-12 pt-8 md:pt-0'>
                <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Projects</h1>
                <div className='w-full h-[1px] bg-[#DDDDDD]' />
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        PROJECTS.map((val ,index) => (
                            <Link href={val.href} className={`group md:w-[570px] duration-500 hover:shadow-xl rounded-tr-[55px] h-[270px] relative flex items-end cursor-pointer`} key={index}>
                                <Image src={val.image} alt={''} fill className={`rounded-tr-[55px] object-cover `} />
                                <h2 className='group-hover:px-3 absolute z-10 md:max-w-[380px] text-base duration-500 text-white left-6 bottom-4 bg-black/40 px-2 py-1 rounded-xl'>{val.fullName}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage