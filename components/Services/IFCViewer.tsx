'use client';

import React, { useEffect, useRef } from "react";
import * as OBC from "@thatopen/components";

function IFCViewer({ifcUrl}: {ifcUrl: string}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const initModelLoading = async () => {
            const components = new OBC.Components();
            const worlds = components.get(OBC.Worlds);

            const world = worlds.create<
                OBC.SimpleScene,
                OBC.SimpleCamera,
                OBC.SimpleRenderer
            >();

            world.scene = new OBC.SimpleScene(components);
            world.renderer = new OBC.SimpleRenderer(components, containerRef.current!);
            world.camera = new OBC.SimpleCamera(components);

            // Attempting to set up the camera and scene
            components.init();
            world.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);
            world.scene.setup();

            const grids = components.get(OBC.Grids);
            grids.create(world);

            const fragments = components.get(OBC.FragmentsManager);
            const fragmentIfcLoader = await components.get(OBC.IfcLoader);
            await fragmentIfcLoader.setup({
                autoSetWasm: false,
                wasm: {
                    path: "/wasm/",
                    absolute: true,
                },
            });

            const workerUrl = '/worker.mjs';
            fragments.init(workerUrl);

            world.camera.controls.addEventListener("rest", () =>
                fragments.core.update(true),
            );

            fragments.list.onItemSet.add(({ value: model }) => {
                model.useCamera(world.camera.three);
                world.scene.three.add(model.object);
                fragments.core.update(true);
            });

            const file = await fetch(ifcUrl);
            const data = await file.arrayBuffer();
            const buffer = new Uint8Array(data);

            await fragmentIfcLoader.load(buffer, true, 'example', {
                processData: {
                    progressCallback: (progress) => console.log(">>>>", progress),
                },
            });
        };

        initModelLoading();
    }, []);

     return <div>
        <div ref={containerRef} style={{ width: "100%", height: "600px" }} />
     </div>;
}

export default IFCViewer;