import React from 'react';
import s from './Skills.module.css'
import html from '../../assets/skillsLogo/HTML.svg'
import css from '../../assets/skillsLogo/CSS.svg'
import react from '../../assets/skillsLogo/React.svg'
import ts from '../../assets/skillsLogo/TS.svg'
import js from '../../assets/skillsLogo/JS.svg'
import webstorm from '../../assets/skillsLogo/Webstorm.svg'
import mui from '../../assets/skillsLogo/MUI.svg'
import sass from '../../assets/skillsLogo/Sass.svg'
import Redux from '../../assets/skillsLogo/Redux.svg'

export const Skills = () => {

    let arrSkills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 3,
            src: react,
            title: 'React',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 4,
            src: ts,
            title: 'TypeScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 5,
            src: js,
            title: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 6,
            src: webstorm,
            title: 'WebStorm',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 7,
            src: mui,
            title: 'MUI',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 8,
            src: sass,
            title: 'Sass',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 9,
            src: Redux,
            title: 'Redux',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }
    ]

    return (
        <div data-section id="Skills" className={s.skillsContainer}>
            <a id={'Skills'}></a>
            <h2 className={s.skillsTitle}>My SKILLS</h2>
            <div className={s.skillsList}>
                {arrSkills.map(t =>
                    <div className={s.skillsBlock} key={t.id}>
                        <img className={s.skillsImg}
                             src={t.src}
                             alt={'Hello'}/>
                        <h2>{t.title}</h2>
                        <p className={s.skillsInfo}>
                            {t.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

