import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';
import Image from 'next/image';

export default function VisualizationPage() {
    return (
        <div>
            <ServicesLayout
                imageOne='/assets/images/hero/hero-1.png'
                imageTwo='/assets/images/hero/hero-1.png'
                title='3d Visualization'
                text={
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                }
                endImageLayout={
                    <div className='md:max-w-[1170px] flex gap-4'>
                        <Image src={'/assets/images/services/interior-3.jpg'} alt='' width={2048} height={1152} className='w-1/2 h-[594px] object-cover object-[30%]' />
                        <Image src={'/assets/images/services/interior-4.jpg'} alt='' width={2048} height={1152} className='w-1/2 h-[594px] object-cover object-[40%]' />
                    </div>
                }
             />
        </div>
    );
}
