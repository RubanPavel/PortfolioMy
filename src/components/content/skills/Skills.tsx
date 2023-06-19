import React from 'react';
import s from './Skills.module.css'
import html from '../../../assets/skillsLogo/HTML.svg'
import css from '../../../assets/skillsLogo/CSS.svg'
import react from '../../../assets/skillsLogo/React.svg'
import ts from '../../../assets/skillsLogo/TS.svg'
import js from '../../../assets/skillsLogo/JS.svg'
import webstorm from '../../../assets/skillsLogo/Webstorm.svg'
import mui from '../../../assets/skillsLogo/MUI.svg'
import sass from '../../../assets/skillsLogo/Sass.svg'
import Redux from '../../../assets/skillsLogo/Redux.svg'

export const Skills = () => {

    let arrSkills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            text: 'Fundamentals HTML tags, form and validation, semantic HTML'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            text: 'Positioning, box modal, selectors, flexbox, media queries, transformation & animation'
        },
        {
            id: 3,
            src: react,
            title: 'React',
            text: 'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC'
        },
        {
            id: 4,
            src: ts,
            title: 'TypeScript',
            text: 'Data types, basic syntax, functions, promises, scope, event loop, async/await'
        },
        {
            id: 5,
            src: js,
            title: 'JavaScript',
            text: 'Data types, basic syntax, functions, promises, scope, event loop, async/await'
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
            text: 'Actions & thunks, reducer, context API, store, flux'
        }
    ]

    return (
        <div data-section id="Skills" className={s.skillsContainer}>
            <a id={'Skills'}></a>
            <h2 className={s.skillsTitle}>Skills</h2>
            <div className={s.skillsList}>
                {arrSkills.map(t =>
                    <div className={s.skillsBlock} key={t.id}>
                        <img className={s.skillsImg}
                             src={t.src}
                             alt={'Hello'}/>
                        <h3>{t.title}</h3>
                        {/* <p className={s.skillsInfo}>
                           {t.text}
                        </p>*/}
                    </div>
                )}
            </div>
        </div>
    );
};

