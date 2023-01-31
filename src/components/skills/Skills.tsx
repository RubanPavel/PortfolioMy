import React from 'react';
import s from './Skills.module.css'


export const Skills = () => {

    let arrSkills = [
        {
            id: 1,
            src: 'https://clck.ru/33Jej3',
            title: 'HTML/CSS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 2,
            src: 'https://clck.ru/33Jej3',
            title: 'React JS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 3,
            src: 'https://clck.ru/33Jej3',
            title: 'React ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 4,
            src: 'https://clck.ru/33Jej3',
            title: 'JS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 5,
            src: 'https://clck.ru/33Jej3',
            title: 'JS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },
        {
            id: 6,
            src: 'https://clck.ru/33Jej3',
            title: 'JS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }
    ]

    return (

        <div className={s.skillsList}>
            {
                arrSkills.map(t =>

                    <div className={s.skillsBlock} key={t.id}>

                        <img className={s.skillsImg}

                             src={t.src}
                             alt={'Hello'}/>

                        <h2>{t.title}</h2>
                        <div className={s.skillsInfo}>
                            {t.text}
                        </div>
                    </div>
                )}

        </div>

    );
};

