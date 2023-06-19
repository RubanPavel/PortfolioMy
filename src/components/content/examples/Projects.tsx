import React from 'react';
import s from "./Projects.module.css";

export const Projects = () => {

    let arrProjects = [
        {
            id: 1,
            href: 'https://chernik1991.github.io/cards/#/login',
            title: 'TODOLIST',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            hiddenText: 'TODOLIST',
            backgroundImage:'https://camo.githubusercontent.com/ab9c78444967830124774b23ce9686f66f999e43e289328161d8c6b7cfcf0f9b/68747470733a2f2f636c69636b75702e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30312f746f2d646f2d6c6973742d617070732d3134303078313035302e706e67'
        },
        {
            id: 2,
            href: 'https://chernik1991.github.io/cards/#/login',
            title: 'Cards',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            hiddenText: 'Cards',
            backgroundImage:'https://play-lh.googleusercontent.com/dZL1dHhI5KwGYxwg40umWtQVOLztECrWo4zKXCAyqX9a3vUKI8Q79OrkIzNnxhE_ZxGB'
        },
        {
            id: 3,
            href: 'https://chernik1991.github.io/cards/#/login',
            title: 'Social network',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            hiddenText: 'Social network',
            backgroundImage:'https://www.specbee.com/sites/default/files/2021-05/SocialmediaModule-teaser-min.jpg'
        },
        {
            id: 4,
            href: 'https://rubanpavel.github.io/AutoHWIgnat',
            title: 'React practices',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            hiddenText: 'React practices',
            backgroundImage:'https://media.list.ly/production/284635/1799492/item1799492_600px.jpeg?ver=4182276872'
        }

    ]

    return (
        <div data-section id="Projects" className={s.projectsContainer}>
            <a id={'Projects'}></a>
            <h2 className={s.projectsTitle}>Projects</h2>
            <div className={s.projectsList}>
                {arrProjects.map(t =>
                    <div key={t.id} className={s.projectsBlock}>
                        <div style={{
                            backgroundImage: `url(${t.backgroundImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>

                            <a href={t.href} target={"_blank"} className={s.projectsLink}>
                                <p className={s.projectsText}><i>{t.hiddenText}</i></p>
                            </a>
                        </div>
                        <div className={s.projectsInfo}>
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

