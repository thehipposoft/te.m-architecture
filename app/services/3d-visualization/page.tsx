import Visualization3d from '@/components/Visualization3d';
import Visualization3dMobile from '@/components/Visualization3dMobile';
import React from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Te.M Architecture | 3D Visualization',
  description: 'Through high-quality 3D , animations, and virtual tours, we bring projects to life before construction begins. Our visualizations help clients and professionals better understand designs, materials, and spatial relationships, ensuring informed decisions at every stage.',
}

export default function VisualizationPage() {
    return (
        <div className=''>
            <Visualization3d />
            <Visualization3dMobile />
        </div>
    );
}
