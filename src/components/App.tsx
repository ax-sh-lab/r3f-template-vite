import React from "react";

import "./App.scss";
import Layout from "./Layout/Layout";
import { OrbitControls, Sphere } from "@react-three/drei";

import StudioCanvas from "./StudioCanvas/StudioCanvas";

function Scene() {
  return (
    <scene>
      {/*  @ts-ignore */}
      <Sphere>
        <meshNormalMaterial />
      </Sphere>
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
