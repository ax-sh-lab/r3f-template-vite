import React from "react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// @ts-ignore
function Loader() {
  return (
    <Html>
      <h1>LOADING</h1>
    </Html>
  );
}

export default function StudioCanvas({
  children,
  ...props
}: React.ComponentProps<any>) {
  return (
    <Canvas className={"h-full w-full"} {...props}>
      <React.Suspense fallback={<Loader />}>{children}</React.Suspense>
    </Canvas>
  );
}
