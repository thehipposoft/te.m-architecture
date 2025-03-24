import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';
import Image from 'next/image';

export default function ModelingPage() {
    return (
        <div>
            <ServicesLayout
                imageOne={<Image src={'/assets/images/services/modeling-1.jpg'} alt='' width={3640} height={3204} className='md:w-[1170px] w-[85vw] md:h-[525px] h-96 rounded-tr-[55px] object-cover' />}
                imageTwo={<Image src={'/assets/images/services/modeling-2.jpg'} alt='' width={3116} height={2427} className='md:w-[419px] w-[85vw] md:h-[428px] h-96  object-cover' />}
                title='Modeling'
                text={
                    <div>
                        <p className='roboto-light leading-6 md:w-[680px] w-[85vw]'> We provide BIM modeling services for architecture and structural projects, ensuring precision, efficiency, and better coordination between disciplines. Our models optimize workflows, improve clash detection, and enhance project visualization, reducing errors and increasing efficiency throughout the process.</p>
                    </div>
                }
                endImageLayout={
                        <Image src={'/assets/images/services/modeling-4.jpg'} alt='' width={5365} height={2324} className='md:w-[1170px] w-[85vw] md:h-[435px] h-96 object-contain' />
                }
             />
        </div>
    );
}
