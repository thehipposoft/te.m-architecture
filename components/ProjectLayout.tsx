import Image from 'next/image'
import React from 'react'
import ProjectsBannerSlider from './ProjectsBannerSlider'
import { Proyecto } from '@/src/types'
import GalleryCard from './Services/GalleryCard'

type Props = {
    project: Proyecto
}

const ProjectLayout = ({ project }:Props) => {
  return (
    <div className='flex flex-col pt-[25%] md:pt-0'>
        <div className='hidden md:block'>
            <ProjectsBannerSlider gallery={project.galeria} />
        </div>
        <div className='md:hidden block mx-auto mt-8'>
            <GalleryCard gallery={project.galeria} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='Hotel Silu Wasi' width='85vw' height='450px' expandColor='#333333' rounded  />
        </div>
        <div className='flex justify-end my-20 '>
            <div className='border-solid border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 md:w-[80vw] w-[85vw] mx-auto md:mx-0'>
                <div className='flex bottom-border py-5 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>project name</h3>
                    <h1 className='uppercase light text-xl text-right md:texdt-left text-[#8d8d8d]'>{project.nombre}</h1>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>typology</h3>
                    <p className=''>{project.categoria}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>location</h3>
                    <p className=''>{project.ubicacion}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>year</h3>
                    <p className=''>{project.fecha}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>status</h3>
                    <p className=''>{project.estado}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>size</h3>
                    <p className=''>{project.tamano}</p>
                </div>
                <div className='flex items-center py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-48 md:w-96'>design team</h3>
                    <p className='uppercase'>{project.equipo}</p>
                </div>
            </div>
        </div>
        <div className='flex xl:flex-row flex-col gap-12 mb-24 mx-auto'>
            <Image
                src={project.croquis_imagen}
                alt={`${project.nombre_abreviado} - Croquis`}
                width={960} height={345}
                className='xl:w-[746px] w-[85vw] xl:h-[526px] object-contain'
            />
            <div className='flex flex-col justify-center gap-2 xl:w-[620px] w-[85vw]'>
                <h4 className='text-[#DDDDDD] text-[40px] light'>{project.nombre_abreviado}</h4>
                <h5 className='bold leading-5 text-base xl:w-3/5'>{project.leyenda}</h5>
                <p className='roboto-light leading-6 text-justify xl:w-[494px]'>{project.descripcion}</p>
            </div>
        </div>
        <Image
            src={project.second_banner}
            alt={`${project.nombre_abreviado} - Second Banner`}
            width={1920} height={1080}
            className='md:w-screen object-cover w-[85vw] mx-auto md:h-[43rem] h-[50vh] rounded-tr-3xl md:rounded-none md:rounded-tr-[200px]'
        />
        <div className={`flex-col-reverse xl:flex-row flex gap-8 w-[85vw] lg:w-[1275px] my-28 mx-auto`}>
            {
                project.nombre_abreviado === 'Silu Wasi'
                ?  <div className={`relative md:w-[613px] md:h-[1104px] h-[65vh]`} >
                        <Image
                        src={project.imagen_bim}
                        alt={`${project.nombre_abreviado} - BIM`}
                        fill
                        className='object-contain'
                    />
                </div>
                : <div className={`relative md:w-[613px]`} >
                    <Image
                        src={project.imagen_bim}
                        alt={`${project.nombre_abreviado} - BIM`}
                        width={800}
                        height={300}
                        className='object-contain max-w-full'
                    />
                </div>
            }
            <div className='flex flex-col gap-2 md:w-[620px]'>
                <h4 className='text-[35px]'>BIM APPROACH</h4>
                <h5 className='bold text-base md:w-3/5'>{project.leyenda_bim}</h5>
                <p className='roboto-light md:w-[580px] leading-6'>{project.descripcion_bim}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectLayout