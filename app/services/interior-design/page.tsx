import ServicesLayout from '@/components/Services/ServicesLayout';
import Image from 'next/image';
import React from 'react';

export default function InteriorDesignPage() {
    return (
        <div>
            <ServicesLayout
                imageOne={<Image src={'/assets/images/services/interior-1.jpg'} alt='' width={1170} height={435} className='rounded-tr-[55px] w-[85vw] md:w-auto object-cover' />}
                imageTwo={<Image src={'/assets/images/services/interior-2.jpg'} alt='' width={419} height={428} className='object-cover w-[85vw] md:w-[419px]' />}
                title='Interior Design'
                text={
                    <div>
                        <p className='roboto-light leading-6 md:w-[680px]'>We create personalized interior spaces that reflect your style and enhance comfort. From material selection to spatial optimization, we focus on functionality and aesthetics to bring your vision to life. Whether for homes, offices, or commercial spaces, we design interiors that feel both inspiring and practical.</p>
                    </div>
                }
                endImageLayout={
                    <div className='md:max-w-[1170px] flex flex-col md:flex-row gap-4'>
                        <Image src={'/assets/images/services/interior-3.jpg'} alt='' width={2048} height={1152} className='md:w-1/2 w-[85vw] md:h-[594px] h-96 object-cover object-[30%]' />
                        <Image src={'/assets/images/services/interior-4.jpg'} alt='' width={2048} height={1152} className='md:w-1/2 w-[85vw] md:h-[594px] h-96 object-cover object-[40%]' />
                    </div>
                }
             />
        </div>
    );
}
