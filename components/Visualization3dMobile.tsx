import React from 'react'
import GalleryCard from '@/components/Services/GalleryCard';
import { AMPLIACION_TIPAL, ARMADALE_PROJECT, BLACKROCK_HOUSE, CASA_RAFITA, DM, DON_MARTIN, INSTITUTO_FRANKLIN, CARNEGIE_HOUSE } from '../app/services/3d-visualization/constants';

const Visualization3dMobile = () => {
  return (
    <div className='lg:hidden flex flex-col gap-4'>
        <GalleryCard gallery={AMPLIACION_TIPAL} title='Ampliacion El Tipal by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/ampliacion-tipal/1.jpg' imageAlt='Visualizacion 3d: Ampliacion Tipal' width='85vw' height='471px' expandColor='#505050' rounded  />
        <div className='flex lg:flex-row flex-col-reverse items-center gap-8'>
            <GalleryCard gallery={ARMADALE_PROJECT} title='Armadale Project by JDA Lammin Architects' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/armadale-project/1.jpg' imageAlt='Visualizacion 3d: Armdale Project' width='85vw' height='428px' expandColor='#111111' />
            <div className='flex flex-col lg:w-[685px]'>
                <h1 className='bold text-xl uppercase pt-8 '>3d Visualization</h1>
                <p>Through high-quality 3D , animations, and virtual tours, we bring projects to life before construction begins. Our visualizations help clients and professionals better understand designs, materials, and spatial relationships, ensuring informed decisions at every stage.</p>
            </div>
        </div>
        <GalleryCard gallery={BLACKROCK_HOUSE} title='Black Rock House' titleColor='#505050' imageSrc='/assets/images/services/3d-visualization/blackrock-house/1.jpg' imageAlt='Visualizacion 3d: BlackRock House' width='85vw' height='471px' expandColor='#FFFFFF'  />
        <div className='flex flex-col gap-2 pt-12'>
            <h1 className='uppercase text-[#DDDDDD] light text-[64px] leading-10'>EXPLORE</h1>
            <h2 className='bolde text-[35px]'>Other projects</h2>
        </div>
        <div className='flex flex-col gap-8 mb-12'>
            <div className='relative'>
                <GalleryCard gallery={CASA_RAFITA} title='Casa Rafita by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/casa-rafita/1.jpg' imageAlt='Visualizacion 3d: Casa Rafita' width='85vw' height='420px' expandColor='#505050' rounded />
            </div>
            <div className='relative'>
                <GalleryCard gallery={DM} title='DM by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/dm/1.jpg' imageAlt='Visualizacion 3d: DM Sandwicheria' width='85vw' height='420px' expandColor='#FFFFFF' rounded />
            </div>
            <div className=' relative'>
                <GalleryCard gallery={DON_MARTIN} title='Restaurante Don Martin by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/don-martin/1.jpg' imageAlt='Visualizacion 3d: Don Martin' width='85vw' height='420px' expandColor='#505050' rounded  />
            </div>
            <div className='relative'>
                <GalleryCard gallery={INSTITUTO_FRANKLIN} title='Instituto Franklin by Espacio Guzman' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/instituto-franklin/1.jpg' imageAlt='Visualizacion 3d: Instituto Franklin' width='85vw' height='420px' expandColor='#FFFFFF' rounded />
            </div>
            <div className=' relative'>
                <GalleryCard gallery={CARNEGIE_HOUSE} title='Carnegie House by JDALammin Architects' titleColor='#FFFFFF' imageSrc='/assets/images/services/3d-visualization/carnegie-house/1.jpg' imageAlt='Visualizacion 3d: Carnegie House' width='85vw' height='420px' expandColor='#505050' rounded  />
            </div>
        </div>
    </div>
  )
}

export default Visualization3dMobile