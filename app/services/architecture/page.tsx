import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';
import Image from 'next/image';

export default function ArchitecturePage() {
    return (
        <div>
            <ServicesLayout
                imageOne={<Image src={'/assets/images/services/architecture-1.jpg'} alt='' width={1170} height={435} className='rounded-tr-[55px] object-cover' />}
                imageTwo={<Image src={'/assets/images/services/architecture-2.jpg'} alt='' width={419} height={428} className='object-cover' />}
                title='Architecture'
                text={
                    <div>
                        <p className='roboto-light md:w-[640px]'>We develop architectural projects from concept to completion, adapting to each client’s needs. Whether it’s a new build, a renovation, or an extension, we design thoughtful and functional spaces that enhance daily life. Our services range from preliminary designs to fully detailed architectural projects. </p>                    </div>
                }
                endImageLayout={
                    <div className='md:max-w-[1170px] flex justify-between'>
                        <Image src={'/assets/images/services/architecture-3.jpg'} alt='' width={1374} height={700} className='w-[47%] h-[435px] object-contain' />
                        <Image src={'/assets/images/services/architecture-4.jpg'} alt='' width={1419} height={635} className='w-[47%] h-[435px] object-contain' />
                    </div>
                }
             />
        </div>
    );
}
