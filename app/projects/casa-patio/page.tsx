import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'

function SiluWasiPage () {

  const PROJECT_DATA = {
    mainImage: '/assets/images/projects/casa-patio/01.webp',
    projectName: 'Casa Patio',
    typology: 'Residential',
    location: 'Salta, Argentina',
    year: '2025',
    status: 'In Progress',
    size: '170 M2',
    designTeam: 'TE.M STUDIO',
    secondImage: '/assets/images/projects/casa-patio/01.webp',
    name: 'Casa patio',
    shortDescription: 'Living with purpose',
    text: 'Casa Patio is a reflection of its owner’s passions and daily rituals. At its core stands a beloved tree, offering shade, tranquility, and a constant connection to nature. The layout embraces this central element, weaving indoor and outdoor spaces seamlessly together. More than just a home, it is a workshop, a sanctuary, and a space for creation—designed entirely around the way its inhabitant lives, works, and dreams.'
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