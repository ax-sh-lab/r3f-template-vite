import React from "react";

import "./App.scss";
import Layout from "./Layout/Layout";
import { OrbitControls, Plane, Sphere } from "@react-three/drei";
import * as THREE from "three";

import StudioCanvas from "./StudioCanvas/StudioCanvas";

const ClippingPlane = () => {};
function Scene() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log(ref.current, "ooo");
  }, []);
  return (
    <scene>
      {/*  @ts-ignore */}
      <Sphere>
        <meshNormalMaterial />
      </Sphere>
      <Plane ref={ref} args={[5, 5]}>
        <meshStandardMaterial
          color={0xe91e63}
          // clippingPlanes: planes.filter(p => p !== plane),
          stencilWrite
          stencilRef={0}
          stencilFunc={THREE.NotEqualStencilFunc}
          stencilFail={THREE.ReplaceStencilOp}
          stencilZFail={THREE.ReplaceStencilOp}
          stencilZPass={THREE.ReplaceStencilOp}
        />
      </Plane>
    </scene>
  );
}

function Viewer() {
  return (
    <section className={"h-screen bg-black"}>
      <StudioCanvas>
        <ambientLight />
        <Scene />
        <OrbitControls />
      </StudioCanvas>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <Viewer />
    </Layout>
  );
}

export default App;
