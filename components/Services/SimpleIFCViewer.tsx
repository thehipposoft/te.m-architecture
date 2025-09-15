'use client';

import { useEffect, useRef } from 'react';
import { IfcViewerAPI } from 'web-ifc-viewer';
import * as THREE from 'three';

export default function IfcViewer({ ifcUrl }: { ifcUrl: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<IfcViewerAPI | null>(null);

  useEffect(() => {
    /*
    if (!containerRef.current) return;

    const viewer = new IfcViewerAPI({ container: containerRef.current });
    viewer.IFC.setWasmPath('/wasm/');

    viewer.grid.setGrid();
    viewer.axes.setAxes();

    viewer.IFC.loader.ifcManager.applyWebIfcConfig({
      COORDINATE_TO_ORIGIN: true,
      USE_FAST_BOOLS: true,
    });

    // Load IFC model
    viewer.IFC.loadIfcUrl(ifcUrl).then(() => {
        // Access the Three.js camera once the model is loaded
        const camera = viewer.context.getCamera();
        camera.position.set(15, 15, 15); // Move camera
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Point to origin
    });

    viewerRef.current = viewer;

    return () => {
      viewer.dispose();
    };
    */
  }, [ifcUrl]);

  return (
        <div
            ref={containerRef}
            className='mb-10 lg:mb-32 lg:h-[600px] h-[400px] w-full hidden'
        />
  );
}
