import React from 'react';
import s from './Content.module.css';
import {Skills} from "../skills/Skills";
import {Examples} from "../examples/Examples";
import {Button} from "@mui/material";
import Download from '@mui/icons-material/Download';

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
                <div className={s.aboutTitle}> ABOUT ME</div>

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
                        <Button
                            variant="outlined"
                            href="#contained-buttons"
                            endIcon={<Download/>}
                            sx={{borderRadius: 28}}
                        >
                            Download CV
                        </Button>
                    </div>
                </div>

            </div>
            <div className={s.skillsContainer}>
                <a id={'Skills'}></a>
                <div className={s.aboutTitle}>My SKILLS</div>
                <div>
                    <Skills/>
                </div>


            </div>

            <div className={s.examplesContainer}>
                <a id={'Examples'}></a>
                <div className={s.aboutTitle}>My Examples</div>
                <div>
                    <Examples/>
                </div>

            </div>

            <div className={s.remoteWorkContainer}>
                <div className={s.remoteWorkContent}>
                    <h2 className={s.aboutTitle}> Considering remote work options</h2>
                    <Button
                        target={"_blank"}
                        variant="contained"
                        href="https://google.com"
                        color={"info"}
                        sx={{borderRadius: 28}}
                    >
                        Contact with me
                    </Button>
                </div>

            </div>


        </div>
    );
};

