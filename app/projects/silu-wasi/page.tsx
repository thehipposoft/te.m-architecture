import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'
import Image from 'next/image'
import GalleryCard from '@/components/Services/GalleryCard'

function SiluWasiPage () {

  const PROJECT_DATA = {
    gallery: [
      {
        src: '/assets/images/projects/silu-wasi/1-fw.webp',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/2.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/3.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/4.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/5.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/6.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/7.jpg',
        alt: ''
      },
      {
        src: '/assets/images/projects/silu-wasi/8.jpg',
        alt: ''
      },
    ],
    projectName: 'hotel boutique silu wasi',
    typology: 'Hospitalty',
    location: 'Salta, Argentina',
    year: '2025',
    status: 'In Progress',
    size: '1050 M2',
    designTeam: 'TE.M STUDIO',
    banner: '/assets/images/projects/silu-wasi/4.jpg',
    bannerW: 2048,
    bannerH: 1152,
    secondImage: '/assets/images/projects/silu-wasi/croquis.jpg',
    name: 'Silo Wasi',
    shortDescription: 'A boutique retreat where accessibility meets nature',
    text: 'Silu Wasi is more than just a hotel—it’s a space designed to be inclusive, sustainable, and deeply connected to its surroundings. Built with locally sourced materials and a minimal environmental footprint, it blends seamlessly into the landscape. Accessibility was a priority from the very beginning, ensuring that every guest, including wheelchair users, can experience comfort and relaxation without limitations. Here, architecture is not just about form; it’s about creating spaces that welcome everyone.',
    BIMtitle: 'Harnessing BIM for terrain adaptation and structural efficiency',
    BIMtext: 'While the project wasn’t initially developed in BIM, the technology played a crucial role in resolving key technical challenges. BIM modeling allowed for precise analysis of the site’s natural slopes, optimizing the building’s placement to minimize excavation and environmental disruption. It also facilitated the integration of adobe construction, ensuring structural integrity while maintaining traditional craftsmanship. By leveraging BIM, we achieved a design that is both sustainable and seamlessly adapted to its unique context.',
  }

  return (
    <div>
        <ProjectLayout 
          gallery={PROJECT_DATA.gallery}
          mobileGallery={
            <GalleryCard gallery={PROJECT_DATA.gallery} title='Hotel Silu Wasi' titleColor='#FFFFFF' imageSrc='/assets/images/projects/silu-wasi/1-fw.webp' imageAlt='asd' width='85vw' height='450px' expandColor='#333333' rounded  />
          }
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
            <Image src={'/assets/images/projects/silu-wasi/croquis.jpg'} alt='' width={960} height={345} className='md:w-[746px] w-[85vw] md:h-[526px] object-contain' />
          }
          name={PROJECT_DATA.name}
          shortDescription={PROJECT_DATA.shortDescription}
          text={PROJECT_DATA.text}
          BIMtitle={PROJECT_DATA.BIMtitle}
          BIMtext={PROJECT_DATA.BIMtext}
          BIMimage={
            <Image src={'/assets/images/projects/silu-wasi/bim.png'} alt='' width={613} height={1559} className='md:w-[613px] md:h-[1104px] h-[65vh] w-[85vw] object-contain' />
          }
        />
    </div>
  )
}

export default SiluWasiPage