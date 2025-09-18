'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
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

        // const scene = new OBC.SimpleScene(components);
        // const renderer = new OBC.SimpleRenderer(components, containerRef.current!);
        // const camera = new OBC.SimpleCamera(components);
        world.scene = new OBC.SimpleScene(components);
        world.renderer = new OBC.SimpleRenderer(components, containerRef.current!);
        world.camera = new OBC.SimpleCamera(components);

        // Attempting to set up the camera and scene
        // camera.world = scene;
        components.init();
        world.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);
        world.scene.setup();

        const grids = components.get(OBC.Grids);
        grids.create(world);

        const fragments = components.get(OBC.FragmentsManager);
        const fragmentIfcLoader = components.get(OBC.IfcLoader);
    };

    async function initFragments() {
        await fragmentIfcLoader.setup({
            autoSetWasm: false,
            wasm: {
                path: "https://unpkg.com/web-ifc@0.0.69/",
                absolute: true,
            },
        });
        await loadModel();
    }

    async function loadModel() {
      const file = await fetch(ifcUrl);
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      const model = await fragmentIfcLoader.load(buffer);
      model.name = "example";
      world.scene.three.add(model);
    }

    initFragments();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "600px" }} />;
}

export default IFCViewer;