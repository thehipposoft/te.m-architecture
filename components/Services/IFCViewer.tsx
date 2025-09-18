'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";

function IFCViewer({ifcUrl}: {ifcUrl: string}) {
  const containerRef = useRef(null);


  return <div ref={containerRef} style={{ width: "100%", height: "600px" }} />;
}

export default IFCViewer;