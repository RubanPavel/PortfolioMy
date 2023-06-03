import React from 'react';
import picture from '../../img/FotoMy.jpg'
import s from './Header.module.css';
import {IconsSocial} from "../iconsSocial/IconsSocial";


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

    return (
        <div className={s.sideHeader}>
            <div className={s.headerTop}>

                <img className={s.headerImg} alt={'Hello'} src={picture}/>
                <h1> Pavel Ruban </h1>
                <div>

                </div>
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