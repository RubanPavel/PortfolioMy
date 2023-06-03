import React, {useCallback} from 'react';
import s from './Content.module.css';
import {Skills} from "../skills/Skills";
import {Examples} from "../examples/Examples";
import {Button} from "@mui/material";
import Download from '@mui/icons-material/Download';
import Box from "@mui/material/Box";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import ReactTypingEffect from "react-typing-effect";


export const Content = () => {
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
      <div className={`${s.contentWrapper} ${s.backgroundTint}`}>
          <a id={'Home'}></a>
          <div className={s.homeContainer}>
              <div className={s.homeContent}>
                  <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{

                        fpsLimit: 40,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
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
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
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
                    variant="contained"
                    href="https://soundcloud.com/discover"
                    color={"info"}
                    sx={{borderRadius: 28}}
                  >
                      Contact Me
                  </Button>
              </div>

          </div>
          <a id={'AboutMe'}></a>
          <div className={s.aboutContainer}>
              <h2 className={s.aboutTitle}> ABOUT ME</h2>

              <div className={s.aboutContent}>

                  <div className={s.aboutText}>
                        <h2>I'm Pavel Ruban, a Frontend Developer</h2>
                        <p>I help you build brand for your business at an affordable price. Thousands of clients have
                            procured exceptional results while working with our dedicated team. when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. I help you build brand
                            for your business at an affordable price. Thousands of clients have procured exceptional
                            results while working with our dedicated team. when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className={s.aboutInfo}>
                        <ul className={s.aboutUl}>
                            <li className={s.aboutLi}>Name:Pavel Ruban</li>
                            <li className={s.aboutLi}>Email: 123@gmail.com</li>
                            <li className={s.aboutLi}>Age: 23</li>
                            <li className={s.aboutLi}>From: Minsk, Belarus</li>
                        </ul>
                        <Box className={s.aboutButton}>
                            <Button
                                variant="outlined"
                                href="#contained-buttons"
                                endIcon={<Download/>}
                                sx={{borderRadius: 28}}
                            >
                                Download CV
                            </Button>
                        </Box>

                    </div>
                </div>

            </div>


            <Skills/>

            <Examples/>

            <div className={s.remoteWorkContainer}>
                <div className={s.remoteWorkContent}>
                    <h2 className={s.aboutTitle}> Considering remote work options</h2>
                    <Button
                        target={"_blank"}
                        variant="outlined"
                        href="https://google.com"
                        color={"error"}
                        size={"large"}
                        sx={{borderRadius: 28, marginTop: 2}}
                    >
                        Contact with me
                    </Button>
                </div>

            </div>


        </div>
    );
};

