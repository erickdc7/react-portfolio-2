import { Particles } from "react-tsparticles"
import { loadFull } from "tsparticles"
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => { }, [])

  return <div>Particles Container</div>;
};

export default ParticlesContainer;
