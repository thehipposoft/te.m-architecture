import type { Metadata } from 'next';
import GalleryCard from '@/components/Services/GalleryCard';
import { Proyecto } from '@/src/types';
import getProjectsByCategory from '@/api/getProjectsByCategory'

export const metadata: Metadata = {
    title: 'Te.M Architecture | Residential Gallery',
    description: 'Every space has a purpose. We design with that in mind. Check our gallery.',
}

const ResidentialGalleryPage = async () => {
    const projectsData: Proyecto[] = await getProjectsByCategory('Residencial');

    return (
        <div className='flex flex-col lg:w-[1170px] w-[85vw] mx-auto lg:pb-8 pb-8 md:py-28 lg:pt-8 pt-[25%]'>
            <div className='flex flex-col gap-4 pb-12'>
                <h1 className='text-[#DDDDDD] light text-[64px] md:leading-10 leading-[55px]'>Residential Projects</h1>
                <h2 className='bolde text-[35px]'>Gallery</h2>
                <div className='w-full h-[1px] bg-[#DDDDDD]' />
            </div>
            <div className='lg:flex hidden flex-col gap-6'>
                <div className='flex gap-6'>
                    {
                        projectsData.map((project) => (
                            <GalleryCard
                                key={project.id}
                                gallery={project.galeria[0]}
                                title={project.nombre_abreviado}
                                titleColor='#FFFFFF'
                                imageSrc={project.imagen_principal_banner}
                                imageAlt={project.nombre}
                                width='570px'
                                height='255px'
                                expandColor='#333333'
                                rounded
                            />
                        ))
                    }
                </div>
            </div>
            <div className='lg:hidden'>
                {
                    projectsData.map((project) => (
                        <div key={project.id} className='mb-6'>
                            <GalleryCard
                                gallery={project.galeria[0]}
                                title={project.nombre_abreviado}
                                titleColor='#FFFFFF'
                                imageSrc={project.imagen_principal_banner}
                                imageAlt={project.nombre}
                                width='85vw'
                                height='455px'
                                expandColor='#333333'
                                rounded
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResidentialGalleryPage
