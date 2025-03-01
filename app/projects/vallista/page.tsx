import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'

function SiluWasiPage () {

  const PROJECT_DATA = {
    mainImage: '/assets/images/projects/vallista/01.webp',
    projectName: 'FABRICA DE CERVEZA ARTESANAL “VALLISTA”',
    typology: 'Industrial',
    location: 'Salta, Argentina',
    year: '2019',
    status: 'Finalized',
    size: '509 M2',
    designTeam: 'TE.M STUDIO',
    secondImage: '/assets/images/projects/vallista/01.webp',
    name: 'Vallista',
    shortDescription: 'Raw Materials, Pure Craftsmanship, and a Deep Connection to Place',
    text: 'From the start, Vallista Craft Brewery was designed to embrace the authenticity of its craft—raw materials, an untouched natural setting, and a brewing process that honors tradition. More than just a production space, the brewery is a tribute to craftsmanship, with a layout carefully planned to follow each step of the brewing journey. Every area is thoughtfully divided, ensuring efficiency while maintaining the artisanal spirit that defines it.'
  }

  return (
    <div>
        <ProjectLayout 
          mainImage={PROJECT_DATA.mainImage} 
          projectName={PROJECT_DATA.projectName} 
          typology={PROJECT_DATA.typology}
          location={PROJECT_DATA.location}
          year={PROJECT_DATA.year}
          status={PROJECT_DATA.status}
          size={PROJECT_DATA.size}
          designTeam={PROJECT_DATA.designTeam}
          secondImage={PROJECT_DATA.secondImage}
          name={PROJECT_DATA.name}
          shortDescription={PROJECT_DATA.shortDescription}
          text={PROJECT_DATA.text}
        />
    </div>
  )
}

export default SiluWasiPage