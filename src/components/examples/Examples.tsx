import React from 'react';
import s from "../examples/Examples.module.css";

export const Examples = () => {

    let arrExamples = [
        {
            id: 1,
            href: 'https://7745.by/',
            title: 'TODOLIST1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 2,
            href: 'https://7745.by/',
            title: 'TODOLIST2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 3,
            href: 'https://7745.by/',
            title: 'TODOLIST3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 4,
            href: 'https://7745.by/',
            title: 'TODOLIST4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }

    ]

    return (
        <div className={s.examplesContainer}>
            <a id={'Examples'}></a>
            <h2 className={s.aboutTitle}>My Work</h2>
            <div className={s.examplesList}>
                {arrExamples.map(t =>
                    <div key={t.id} className={s.examplesBlock}>
                        <div className={s.examplesImg}>
                            <a href={t.href} target={"_blank"} className={s.examplesLink}>
                                <p className={s.examplesText}><i>TODOLIST</i></p>
                            </a>
                        </div>
                        <div className={s.examplesInfo}>
                            <h2>{t.title}</h2>
                            <p> {t.text}</p>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

