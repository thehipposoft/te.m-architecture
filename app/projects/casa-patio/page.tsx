import GalleryCard from '@/components/Services/GalleryCard'
import ProjectsBannerSlider from '@/components/ProjectsBannerSlider'
import Image from 'next/image'
import React from 'react'
import SimpleGallery from '@/components/commons/SimpleGallery'

function SiluWasiPage () {

  const PROJECT_DATA = {
    gallery: [
      {
        src: '/assets/images/projects/casa-patio/1.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/2.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/3.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/4.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/5.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/6.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/7.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/casa-patio/8.jpg',
        alt: ''
      },
    ],
    projectName: 'Casa Patio',
    typology: 'Residential',
    location: 'Salta, Argentina',
    year: '2025',
    status: 'In Progress',
    size: '170 M2',
    designTeam: 'TE.M STUDIO AND ARQ. BELEN GOYTI',
    banner: '/assets/images/projects/casa-patio/2.jpg',
    bannerW: 1448,
    bannerH: 815,
    secondImage: '/assets/images/projects/croquis.png',
    name: 'Casa patio',
    shortDescription: 'Living with purpose',
    text: 'Casa Patio is a reflection of its owner’s passions and daily rituals. At its core stands a beloved tree, offering shade, tranquility, and a constant connection to nature. The layout embraces this central element, weaving indoor and outdoor spaces seamlessly together. More than just a home, it is a workshop, a sanctuary, and a space for creation—designed entirely around the way its inhabitant lives, works, and dreams.',
    BIMtitle: 'Adaptive modeling for complex geometries',
    BIMtext: "Casa Patio's design presented a unique challenge: two offset volumes rotated at a 7-degree angle, breaking away from conventional perpendicular grids. BIM technology played a key role in precisely coordinating structural alignments, optimizing material efficiency, and ensuring seamless integration between elements. This approach allowed for greater design flexibility, facilitating accurate documentation and smooth collaboration between disciplines throughout the project.",
  }

  return (
        <div className='flex flex-col pt-[25%] md:pt-0'>
            <div className='hidden md:block'>
                <ProjectsBannerSlider gallery={PROJECT_DATA.gallery} />
            </div>
            <div className='md:hidden block mx-auto mt-8'>
              <GalleryCard gallery={PROJECT_DATA.gallery} title='Casa Patio' titleColor='#FFFFFF' imageSrc='/assets/images/projects/casa-patio/1.jpg' imageAlt='asd' width='85vw' height='450px' expandColor='#FFFFFF' rounded  />
            </div>
            <div className='flex justify-end my-20 '>
                    <div className='border-solid border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 md:w-[80vw] w-[85vw] mx-auto md:mx-0'>
                        <div className='flex bottom-border py-5 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>project name</h3>
                            <h1 className='uppercase light text-xl text-[#8d8d8d]'>{PROJECT_DATA.projectName}</h1>
                        </div>
                        <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>typology</h3>
                            <p className=''>{PROJECT_DATA.typology}</p>
                        </div>
                        <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>location</h3>
                            <p className=''>{PROJECT_DATA.location}</p>
                        </div>
                        <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>year</h3>
                            <p className=''>{PROJECT_DATA.year}</p>
                        </div>
                        <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>status</h3>
                            <p className=''>{PROJECT_DATA.status}</p>
                        </div>
                        <div className='flex items-center bottom-border py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>size</h3>
                            <p className=''>{PROJECT_DATA.size}</p>
                        </div>
                        <div className='flex items-center py-3 px-8 md:pl-16'>
                            <h3 className='uppercase w-96'>design team</h3>
                            <p className=''>{PROJECT_DATA.designTeam}</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-12 mb-24 mx-auto'>
                    <SimpleGallery images={[{src: '/assets/images/projects/casa-patio/croquis.jpg', alt: ''}, {src: '/assets/images/projects/casa-patio/croquis-2.jpeg', alt: ''}]} />
                    <div className='flex flex-col justify-center gap-2 md:w-[620px] w-[85vw]'>
                        <h4 className='text-[#DDDDDD] text-[40px] light'>{PROJECT_DATA.name}</h4>
                        <h5 className='bold leading-5 text-base md:w-3/5'>{PROJECT_DATA.shortDescription}</h5>
                        <p className='roboto-light leading-6 text-justify md:w-[494px]'>{PROJECT_DATA.text}</p>
                    </div>
                </div>
                    <Image src={PROJECT_DATA.banner} alt='' width={PROJECT_DATA.bannerW} height={PROJECT_DATA.bannerH} className='md:w-screen object-cover w-[85vw] mx-auto md:h-[685px] h-[50vh] rounded-tr-3xl md:rounded-none md:rounded-tr-[200px]' />
                <div className={`${PROJECT_DATA.name === 'Vallista' ? 'md:flex-col flex-col-reverse': 'flex-col-reverse md:flex-row'} flex gap-8 w-[85vw] md:w-[1275px] my-28 mx-auto`}>
                    <Image src={'/assets/images/projects/casa-patio/bim.jpg'} alt='' width={2857} height={1320} className='md:w-[645px] w-[85vw] object-contain h-[400px]' />
                    <div className='flex flex-col gap-2 md:w-[620px] '>
                        <h4 className='text-[35px]'>BIM APPROACH</h4>
                        <h5 className='bold text-base md:w-3/5'>{PROJECT_DATA.BIMtitle}</h5>
                        <p className='roboto-light md:w-[580px] leading-6'>{PROJECT_DATA.BIMtext}</p>
                    </div>
                </div>
          </div>
  )
}

export default SiluWasiPage