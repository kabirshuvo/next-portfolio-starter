import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesMove = () => {
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
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble", // Changed mode to "bubble"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#3182CE", // Changed color to blue-300
          },
          links: {
            color: "#63B3ED", // Changed link color to a shade of blue
            distance: 150,
            enable: true,
            opacity: 0.5,
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
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesMove;