'use client';
import SimpleIFCViewer from './SimpleIFCViewer';

export default function ViewerWrapper() {
    return <SimpleIFCViewer ifcUrl="/models/casa-CyP.ifc" />;
}