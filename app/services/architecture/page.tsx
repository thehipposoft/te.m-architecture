import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te. M Architecture | Architecture',
  description: 'We develop architectural projects from concept to completion, adapting to each client’s needs. Whether it’s a new build, a renovation, or an extension, we design thoughtful and functional spaces that enhance daily life. Our services range from preliminary designs to fully detailed architectural projects.',
}

export default function ArchitecturePage() {
    return (
        <div>
            <ServicesLayout
                imageOne={<Image src={'/assets/images/services/architecture-1.jpg'} alt='Services Architecture 1 Image' width={1170} height={435} className='rounded-tr-[55px] w-[85vw] lg:w-auto object-cover' />}
                imageTwo={<Image src={'/assets/images/services/architecture-2.jpg'} alt='Services Architecture Image 2: render' width={419} height={428} className='object-cover' />}
                title='Architecture'
                text={
                    <div>
                        <p className='roboto-light md:w-[640px]'>We develop architectural projects from concept to completion, adapting to each client’s needs. Whether it’s a new build, a renovation, or an extension, we design thoughtful and functional spaces that enhance daily life. Our services range from preliminary designs to fully detailed architectural projects.</p>                    </div>
                }
                endImageLayout={
                    <div className='lg:max-w-[1170px] flex flex-col lg:flex-row justify-between'>
                        <Image src={'/assets/images/services/architecture-3.jpg'} alt='Services Architecture Image 3: render' width={550} height={435} className='lg:w-[47%] w-[85vw] md:h-[435px] h-96 object-contain' />
                        <Image src={'/assets/images/services/architecture-4.jpg'} alt='Services Architecture Image 4: render' width={550} height={435} className='lg:w-[47%] w-[85vw] md:h-[435px] h-96 object-contain' />
                    </div>
                }
             />
        </div>
    );
}
