import React from "react";
import Particles from 'react-particles-js';
import ParticlesConfig from "./particles-config";


export default function ParticleBackground(){
    return(
        <Particles params={ParticlesConfig}></Particles>
      
    );
}  console.log("Particle",ParticlesConfig)