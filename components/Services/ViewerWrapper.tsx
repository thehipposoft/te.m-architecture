import dynamic from 'next/dynamic';
const SimpleIFCViewer = dynamic(() => import('./SimpleIFCViewer'), { ssr: true });

const ViewerWrapper = () => {
    return (
        <SimpleIFCViewer ifcUrl='/models/casa-CyP.ifc' />
    )
}

export default ViewerWrapper;