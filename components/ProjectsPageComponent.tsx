import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Proyecto } from '@/src/types'

type Props = {
    projectsToDisplay: Proyecto[]
}

const ProjectsPageComponent = ({ projectsToDisplay }:Props) => {

  return (
    <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto md:py-16 pt-[25%]'>
        <div className='flex flex-col gap-8 pb-12 pt-8 md:pt-0'>
            <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Projects</h1>
            <div className='w-full h-[1px] bg-[#DDDDDD]' />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {
                    projectsToDisplay.map((project: Proyecto, index: number) => (
                        <Link href={`/projects/${project.id}`} className={`group lg:w-[570px] md:w-[80vw] duration-500 hover:shadow-xl rounded-tr-[55px] h-[270px] relative flex items-end cursor-pointer`} key={index}>
                            <div className='xl:block xl:bg-black/25 bg-black/10 group-hover:opacity-0 duration-500 absolute left-0 top-0 z-[5] w-full h-full rounded-tr-[55px]' /> 
                            <Image src={project.imagen_principal_banner} alt={''} fill className={`rounded-tr-[55px] object-cover `} />
                            <h2 className='group-hover:px-3 absolute z-10 md:max-w-[380px] text-base duration-500 text-white left-6 bottom-4 bg-black/40 px-2 py-1 rounded-xl'>{project.nombre}</h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectsPageComponent