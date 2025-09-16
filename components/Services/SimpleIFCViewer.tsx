'use client';

import { useEffect, useRef } from 'react';
import { IfcViewerAPI } from 'web-ifc-viewer';
import * as THREE from 'three';

export default function IfcViewer({ ifcUrl }: { ifcUrl: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const viewerRef = useRef<IfcViewerAPI | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const viewer = new IfcViewerAPI({ container: containerRef.current });
		viewer.IFC.setWasmPath('/wasm/');

		viewer.IFC.loader.ifcManager.applyWebIfcConfig({
			COORDINATE_TO_ORIGIN: true,
			USE_FAST_BOOLS: true,
		});

		viewer.IFC.loadIfcUrl(ifcUrl).then(() => {
			// Force viewer to render first (fitToFrame happens here)
			viewer.context.renderer.postProduction.update();

			// Then override camera
			setTimeout(() => {
				const camera = viewer.context.getCamera();
				camera.position.set(0, 10, 40);
				camera.lookAt(new THREE.Vector3(0, 0, 0));

				// Make OrbitControls start from this state
				viewer.context.ifcCamera.cameraControls.setLookAt(
					camera.position.x,
					camera.position.y,
					camera.position.z,
					10, 0, 0,
					true
				);
			}, 100);
		});

		viewerRef.current = viewer;

		return () => {
			viewer.dispose();
		};
	}, [ifcUrl]);

	return (
		<div
			ref={containerRef}
			className='mb-10 lg:h-[600px] h-[400px] w-full'
		/>
	);
}
