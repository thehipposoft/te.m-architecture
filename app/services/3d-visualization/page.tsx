import Visualization3d from '@/components/Visualization3d';
import Visualization3dMobile from '@/components/Visualization3dMobile';
import React from 'react';

export default function VisualizationPage() {
    return (
        <div className=''>
            <Visualization3d />
            <Visualization3dMobile />
        </div>
    );
}
