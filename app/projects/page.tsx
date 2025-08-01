import React from 'react'
import type { Metadata } from 'next'
import { Proyecto, ProyectosData } from '@/src/types';
import getAllProjects from '@/api/getAllProjects'
import ProjectsPageComponent from '@/components/ProjectsPageComponent';
 
export const metadata: Metadata = {
  title: 'Te. M Architecture | Proyects',
  description: 'Look at the last proyects from Te.M Architecture Studio',
}

const projectsData: Proyecto[] = await getAllProjects();


function ProjectsPage () {
  return (
    <ProjectsPageComponent projectsToDisplay={projectsData} />
  )
}

export default ProjectsPage