import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';
import Image from 'next/image';

export default function ModelingPage() {
    return (
        <div>
            <ServicesLayout
                imageOne={<Image src={'/assets/images/services/modeling-1.jpg'} alt='' width={3640} height={3204} className='md:w-[1170px] md:h-[525px] rounded-tr-[55px] object-cover' />}
                imageTwo={<Image src={'/assets/images/services/modeling-2.jpg'} alt='' width={3116} height={2427} className='md:w-[419px] md:h-[428px] object-cover' />}
                title='Modeling'
                text={
                    <div>
                        <p className='roboto-light leading-6 w-[680px]'> We provide BIM modeling services for architecture and structural projects, ensuring precision, efficiency, and better coordination between disciplines. Our models optimize workflows, improve clash detection, and enhance project visualization, reducing errors and increasing efficiency throughout the process.</p>
                    </div>
                }
                endImageLayout={
                        <Image src={'/assets/images/services/modeling-3.jpg'} alt='' width={4863} height={2548} className='md:w-[1170px] md:h-[435px] object-contain' />
                }
             />
        </div>
    );
}
