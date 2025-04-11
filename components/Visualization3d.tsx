import React from 'react'
import GalleryCard from '@/components/Services/GalleryCard';
import { AMPLIACION_TIPAL, ARMADALE_PROJECT, BLACKROCK_HOUSE, CASA_RAFITA, DM, DON_MARTIN } from '../app/services/3d-visualization/constants';
import VisualizationGallery from './commons/VisualizationGallery';

const Visualization3d = () => {
  return (
    <div className='lg:flex hidden flex-col gap-4'>
        <GalleryCard gallery={AMPLIACION_TIPAL} title='Ampliacion El Tipal by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/ampliacion-tipal/1.jpg' imageAlt='Visualizacion 3d: Ampliacion Tipal' width='1170px' height='471px' expandColor='#505050' rounded  />
        <div className='flex md:flex-row flex-col-reverse items-center gap-8'>
            <GalleryCard gallery={ARMADALE_PROJECT} title='Armadale Project by JDA Lammin Architects' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/armadale-project/1.jpg' imageAlt='Visualizacion 3d: Armdale Project' width='419px' height='428px' expandColor='#111111' />
            <div className='flex flex-col md:w-[685px]'>
                <h1 className='bold text-xl uppercase pt-8 md:pt-0'>3d Visualization</h1>
                <p>Through high-quality 3D , animations, and virtual tours, we bring projects to life before construction begins. Our visualizations help clients and professionals better understand designs, materials, and spatial relationships, ensuring informed decisions at every stage.</p>
            </div>
        </div>
        <GalleryCard gallery={BLACKROCK_HOUSE} title='Black Rock House' titleColor='#505050' imageSrc='/assets/images/services/3d-visualization/blackrock-house/1.jpg' imageAlt='Visualizacion 3d: Black Rock House' width='1170px' height='471px' expandColor='#FFFFFF'  />
        <div className='flex flex-col gap-2 py-12'>
            <h1 className='uppercase text-[#DDDDDD] light text-[64px] leading-10'>EXPLORE</h1>
            <h2 className='bolde text-[35px]'>Other projects</h2>
        </div>
        <VisualizationGallery />
    </div>
  )
}

export default Visualization3d