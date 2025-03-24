import ProjectLayout from '@/components/ProjectLayout'
import Image from 'next/image'
import React from 'react'

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
    designTeam: 'TE.M STUDIO',
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
    <div>
        <ProjectLayout 
          gallery={PROJECT_DATA.gallery} 
          projectName={PROJECT_DATA.projectName} 
          typology={PROJECT_DATA.typology}
          location={PROJECT_DATA.location}
          year={PROJECT_DATA.year}
          status={PROJECT_DATA.status}
          size={PROJECT_DATA.size}
          designTeam={PROJECT_DATA.designTeam}
          banner={PROJECT_DATA.banner}
          bannerW={PROJECT_DATA.bannerW}
          bannerH={PROJECT_DATA.bannerH}
          secondImage={
            <Image src={'/assets/images/projects/casa-patio/croquis.jpg'} alt='' width={1111} height={567} className='md:w-[746px] w-[85vw] md:h-[526px] h-[45vh] object-contain' />
          }
          name={PROJECT_DATA.name}
          shortDescription={PROJECT_DATA.shortDescription}
          text={PROJECT_DATA.text}
          BIMtitle={PROJECT_DATA.BIMtitle}
          BIMtext={PROJECT_DATA.BIMtext}
          BIMimage={
            <Image src={'/assets/images/projects/casa-patio/bim.jpg'} alt='' width={2857} height={1320} className='md:w-[645px] w-[85vw] object-contain h-[400px]' />
          }
        />
    </div>
  )
}

export default SiluWasiPage