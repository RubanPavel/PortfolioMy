import React from 'react';
import s from './Content.module.css';
import {Skills} from "../skills/Skills";
import {Examples} from "../examples/Examples";
import {Button} from "@mui/material";
import Download from '@mui/icons-material/Download';
import Box from "@mui/material/Box";

export const Content = () => {
    return (
        <div className={s.contentWrapper}>
            <a id={'Home'}></a>
            <div className={s.homeContainer}>
                <div className={s.homeContent}>
                    <p> Welcome</p>
                    <h2>I'm Frontend Developer</h2>
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

