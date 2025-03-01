import Image from 'next/image'
import React from 'react'

type ProjectLayoutTypes = {
    mainImage: string,
    projectName: string,
    typology: string,
    location: string,
    year: string,
    status: string,
    size: string,
    designTeam: string,
    secondImage: string,
    name: string,
    shortDescription: string,
    text: string,
}

const ProjectLayout = ({
    mainImage,
    projectName,
    typology,
    location,
    year,
    status,
    size,
    designTeam,
    secondImage,
    name,
    shortDescription,
    text
}:ProjectLayoutTypes) => {
  return (
    <div className='flex flex-col'>
        <div>
            <Image src={mainImage} alt='' width={1120} height={1150} className='w-screen h-[685px] rounded-tr-[200px]' />
        </div>
        <div className='flex justify-end my-20'>
            <div className='border rounded-tl-3xl pt-4 w-[80vw]'>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>project name</h3>
                    <h1 className='uppercase light text-xl text-[#8d8d8d]'>{projectName}</h1>
                </div>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>typology</h3>
                    <p className=''>{typology}</p>
                </div>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>location</h3>
                    <p className=''>{location}</p>
                </div>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>year</h3>
                    <p className=''>{year}</p>
                </div>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>status</h3>
                    <p className=''>{status}</p>
                </div>
                <div className='flex border-b py-5 pl-16'>
                    <h3 className='uppercase w-96'>size</h3>
                    <p className=''>{size}</p>
                </div>
                <div className='flex py-5 pl-16'>
                    <h3 className='uppercase w-96'>design team</h3>
                    <p className=''>{designTeam}</p>
                </div>
            </div>
        </div>
        <div className='flex gap-8 mb-24'>
            <Image src={secondImage} alt='' width={1120} height={1150} className='w-[746px] h-[526px]' />
            <div className='flex flex-col justify-center gap-2 md:w-[620px]'>
                <h4 className='text-[#DDDDDD] text-[40px] light'>{name}</h4>
                <h5 className='bold leading-5'>{shortDescription}</h5>
                <p>{text}</p>
            </div>
        </div>
        <div>
            <Image src={'/assets/images/projects/silu-wasi/01.webp'} alt='' width={1120} height={1150} className='w-screen h-[685px] rounded-tr-[200px]' />
        </div>
        <div className='flex gap-8 my-24'>
            <Image src={'/assets/images/projects/silu-wasi/01.webp'} alt='' width={1120} height={1150} className='w-[746px] h-[526px]' />
            <div className='flex flex-col justify-center gap-2 md:w-[620px]'>
                <h4 className='text-[35px]'>BIM APPROACH</h4>
                <h5 className='bold '>Harnessing BIM for terrain adaptation and structural efficiency</h5>
                <p>While the project wasn’t initially developed in BIM, the technology played a crucial role in resolving key technical challenges. BIM modeling allowed for precise analysis of the site’s natural slopes, optimizing the building’s placement to minimize excavation and environmental disruption. It also facilitated the integration of adobe construction, ensuring structural integrity while maintaining traditional craftsmanship. By leveraging BIM, we achieved a design that is both sustainable and seamlessly adapted to its unique context.</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectLayout