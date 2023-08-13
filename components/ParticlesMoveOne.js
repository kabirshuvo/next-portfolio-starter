import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesMoveOne = () => {
  // Callback function to initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Callback function after particles are loaded (empty in this case)
  const particlesLoaded = useCallback(async () => {}, []);

  // Render the Particles component with configuration options
  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent", // Transparent background
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              lineLinked: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#38A169",
          },
          links: {
            color: "#4FD1C5",
            distance: 120,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesMoveOne;
