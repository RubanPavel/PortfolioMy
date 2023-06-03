import React, {useCallback} from 'react';
import picture from '../../img/FotoMy.jpg'
import s from './Header.module.css';
import {IconsSocial} from "../iconsSocial/IconsSocial";
import {loadFull} from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const arrNavItem = [
    {
        id: 1,
        href: '#Home',
        title: 'Home',
    },
    {
        id: 2,
        href: '#AboutMe',
        title: 'AboutMe',
    },
    {
        id: 3,
        href: '#AboutMe',
        title: 'Skills',
    },
    {
        id: 4,
        href: '#Examples',
        title: 'Examples',
    },
    {
        id: 5,
        href: '#Contact',
        title: 'Contact',
    }
]


const Header = () => {
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
        <div className={s.sideHeader}>
            <div className={s.headerTop}>
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
                              speed: 6,
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
                <img className={s.headerImg} alt={'Hello'} src={picture}/>
                <h1> Pavel Ruban </h1>
            </div>
            <div className={s.headerNav}>
                {arrNavItem.map(t =>
                    <ul className={s.navUl} key={t.id}>
                        <li><a href={t.href} className={s.navItem}>{t.title}</a></li>
                    </ul>
                )}
            </div>
            <IconsSocial/>
        </div>
    );
};

export default Header;