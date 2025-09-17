'use client';
import dynamic from 'next/dynamic';
const SimpleIFCViewer = dynamic(() => import('./SimpleIFCViewer'), { ssr: false });
import IfcViewer from "./SimpleIFCViewer";

const ViewerWrapper = () => {
    return (
        <SimpleIFCViewer ifcUrl='/models/casa-CyP.ifc' />
    )
}

export default ViewerWrapper;