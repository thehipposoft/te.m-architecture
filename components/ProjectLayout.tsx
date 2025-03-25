import Image from 'next/image'
import React from 'react'
import ProjectsBannerSlider from './ProjectsBannerSlider'

type GalleryType = {
    src: string,
    alt: string
}

type ProjectLayoutTypes = {
    projectName: string,
    gallery: GalleryType[],
    mobileGallery: any,
    typology: string,
    location: string,
    year: string,
    status: string,
    size: string,
    designTeam: string,
    banner: string,
    bannerW: number,
    bannerH: number,
    secondImage: any,
    name: string,
    shortDescription: string,
    text: string,
    BIMtitle: string,
    BIMtext: string,
    BIMimage: any,
}

const ProjectLayout = ({
    gallery,
    mobileGallery,
    projectName,
    typology,
    location,
    year,
    status,
    size,
    designTeam,
    banner,
    bannerW,
    bannerH,
    secondImage,
    name,
    shortDescription,
    text,
    BIMtitle,
    BIMtext,
    BIMimage,
}:ProjectLayoutTypes) => {
  return (
    <div className='flex flex-col pt-[25%] md:pt-0'>
        <div className='hidden md:block'>
            <ProjectsBannerSlider gallery={gallery} />
        </div>
        <div className='md:hidden block mx-auto mt-8'>
            {mobileGallery}
        </div>
        <div className='flex justify-end my-20 '>
            <div className='border-solid border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 md:w-[80vw] w-[85vw] mx-auto md:mx-0'>
                <div className='flex bottom-border py-5 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>project name</h3>
                    <h1 className='uppercase light text-xl text-[#8d8d8d]'>{projectName}</h1>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>typology</h3>
                    <p className=''>{typology}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>location</h3>
                    <p className=''>{location}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>year</h3>
                    <p className=''>{year}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>status</h3>
                    <p className=''>{status}</p>
                </div>
                <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>size</h3>
                    <p className=''>{size}</p>
                </div>
                <div className='flex items-center py-3 px-8 md:pl-16'>
                    <h3 className='uppercase w-96'>design team</h3>
                    <p className=''>{designTeam}</p>
                </div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col gap-12 mb-24 mx-auto'>
            {secondImage}
            <div className='flex flex-col justify-center gap-2 md:w-[620px] w-[85vw]'>
                <h4 className='text-[#DDDDDD] text-[40px] light'>{name}</h4>
                <h5 className='bold leading-5 text-base md:w-3/5'>{shortDescription}</h5>
                <p className='roboto-light leading-6 text-justify md:w-[494px]'>{text}</p>
            </div>
        </div>
            <Image src={banner} alt='' width={bannerW} height={bannerH} className='md:w-screen object-cover w-[85vw] mx-auto md:h-[685px] h-[50vh] rounded-tr-3xl md:rounded-none md:rounded-tr-[200px]' />
        <div className={`${name === 'Vallista' ? 'md:flex-col flex-col-reverse': 'flex-col-reverse md:flex-row'} flex gap-8 w-[85vw] md:w-[1275px] my-28 mx-auto`}>
            {BIMimage}
            <div className='flex flex-col gap-2 md:w-[620px] '>
                <h4 className='text-[35px]'>BIM APPROACH</h4>
                <h5 className='bold text-base md:w-3/5'>{BIMtitle}</h5>
                <p className='roboto-light md:w-[580px] leading-6'>{BIMtext}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectLayout