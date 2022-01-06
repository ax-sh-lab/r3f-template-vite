import React from "react";

import "./App.scss";
import Layout from "./Layout/Layout";
import { OrbitControls, Sphere } from "@react-three/drei";

import StudioCanvas from "./StudioCanvas/StudioCanvas";

function Scene() {
  return (
    <scene>
      {/*  @ts-ignore */}
      <Sphere />
    </scene>
  );
}

function Viewer() {
  return (
    <StudioCanvas>
      <ambientLight />
      <Scene />
      <OrbitControls />
    </StudioCanvas>
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
