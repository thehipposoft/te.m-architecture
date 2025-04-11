import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'
import Image from 'next/image'
import GalleryCard from '@/components/Services/GalleryCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te. M Architecture | Proyects: Cervezeria Artesnal Vallista',
  description: 'From the start, Vallista Craft Brewery was designed to embrace the authenticity of its craft—raw materials, an untouched natural setting, and a brewing process that honors tradition.',
}

function SiluWasiPage () {

  const PROJECT_DATA = {
    gallery: [
      {
        src: '/assets/images/projects/vallista/1.jpg',
        alt: 'Cervezeria Artesanal Vallista 1'
      },
      {
        src: '/assets/images/projects/vallista/2.jpg',
        alt: 'Cervezeria Artesanal Vallista 2'
      },
      {
        src: '/assets/images/projects/vallista/3.jpg',
        alt: 'Cervezeria Artesanal Vallista 3'
      },
      {
        src: '/assets/images/projects/vallista/4.jpg',
        alt: 'Cervezeria Artesanal Vallista 4'
      },
      {
        src: '/assets/images/projects/vallista/5.jpg',
        alt: 'Cervezeria Artesanal Vallista 5'
      },
    ],
    projectName: 'FABRICA DE CERVEZA ARTESANAL “VALLISTA”',
    typology: 'Industrial',
    location: 'Salta, Argentina',
    year: '2019',
    status: 'Finalized',
    size: '509 M2',
    designTeam: 'TE.M STUDIO',
    banner: '/assets/images/projects/vallista/2.jpg',
    bannerW: 1748,
    bannerH: 983,
    secondImage: '/assets/images/projects/croquis.png',
    name: 'Vallista',
    shortDescription: 'Raw Materials, Pure Craftsmanship, and a Deep Connection to Place',
    text: 'From the start, Vallista Craft Brewery was designed to embrace the authenticity of its craft—raw materials, an untouched natural setting, and a brewing process that honors tradition. More than just a production space, the brewery is a tribute to craftsmanship, with a layout carefully planned to follow each step of the brewing journey. Every area is thoughtfully divided, ensuring efficiency while maintaining the artisanal spirit that defines it.',
    BIMtitle: 'Precision and Optimization for a Seamless Brewing Process',
    BIMtext: 'BIM played a crucial role in the brewery’s design, especially in managing complex installations. Given the strict sanitary regulations and the need to integrate an intricate network of tanks, fermenters, and utilities, precise coordination was essential. The use of BIM allowed us to streamline the layout of plumbing, gas, and ventilation systems, ensuring seamless functionality while maintaining the integrity of the brewing process.',
  }

  return (
    <div>
        <ProjectLayout 
          gallery={PROJECT_DATA.gallery}
          mobileGallery={
            <GalleryCard gallery={PROJECT_DATA.gallery} title='Fabrica de Cerveza Artesanal "Vallista"' titleColor='#FFFFFF' imageSrc='/assets/images/projects/vallista/1.jpg' imageAlt='Cervezeria Artesanal Vallista' width='85vw' height='450px' expandColor='#FFFFFF' rounded  />
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
            <Image src={'/assets/images/projects/vallista/croquis.jpg'} alt='' width={3468} height={2876} className='md:w-[746px] w-[85vw] h-80 mx-auto md:h-[526px] object-contain' />
          }
          name={PROJECT_DATA.name}
          shortDescription={PROJECT_DATA.shortDescription}
          text={PROJECT_DATA.text}
          BIMtitle={PROJECT_DATA.BIMtitle}
          BIMtext={PROJECT_DATA.BIMtext}
          BIMimage={
            <Image src={'/assets/images/projects/vallista/bim.jpg'} alt='' width={5713} height={1700} className='w-[90vw] h-[400px] object-contain' />
          }
        />
    </div>
  )
}

export default SiluWasiPage