import React, {useCallback} from 'react';

import Particles from "react-tsparticles";
import ReactTypingEffect from "react-typing-effect";
import {Button} from "@mui/material";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import s from './Home.module.css'

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <div className={`${s.box} ${s.backgroundTint}`}>
      <a id={'Home'}></a>
      <div className={s.homeContainer}>
        <div className={s.homeContent}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className={s.part}
            options={{
              fpsLimit: 40,

              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "slow",
                  },
                  resize: true,
                },

              },
              particles: {
                color: {
                  value: "#ffffff",

                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.8,
                  width: 0.2,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
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
                    area: 900,

                  },
                  value: 80,
                },
                opacity: {
                  value: 0.8,
                },
                shape: {
                  type: "triangle",
                },
                size: {
                  value: {min: 1, max: 5},

                },
              },
              detectRetina: true,
            }}
          />
          <p> Welcome</p>


          <h2>
            <ReactTypingEffect
              text={["I'm Frontend Developer"]}
            />
          </h2>

          <p> based in Minsk, Belarus</p>
          <Button
            variant="outlined"
            href="https://soundcloud.com/discover"
            sx={{
              borderRadius: 28,
              color: '#20c997',
              borderColor: '#20c997',
              "&:hover": {
                color: '#20c997',
                borderColor: '#20c997'
              }
            }}
          >
            Contact Me
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Home;