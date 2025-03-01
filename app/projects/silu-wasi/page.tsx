import ProjectLayout from '@/components/ProjectLayout'
import React from 'react'

function SiluWasiPage () {

  const PROJECT_DATA = {
    mainImage: '/assets/images/projects/silu-wasi/01.webp',
    projectName: 'hotel boutique silu wasi',
    typology: 'Hospitalty',
    location: 'Salta, Argentina',
    year: '2025',
    status: 'In Progress',
    size: '1050 M2',
    designTeam: 'TE.M STUDIO',
    secondImage: '/assets/images/projects/silu-wasi/01.webp',
    name: 'Silo Wasi',
    shortDescription: 'A boutique retreat where accessibility<br/> meets nature',
    text: 'Silu Wasi is more than just a hotel—it’s a space designed to be inclusive, sustainable, and deeply connected to its surroundings. Built with locally sourced materials and a minimal environmental footprint, it blends seamlessly into the landscape. Accessibility was a priority from the very beginning, ensuring that every guest, including wheelchair users, can experience comfort and relaxation without limitations. Here, architecture is not just about form; it’s about creating spaces that welcome everyone.'
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