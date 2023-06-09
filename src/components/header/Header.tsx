import React, {useEffect, useRef, useState} from 'react';
import picture from '../../assets/FotoMy.jpg'
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
        href: '#About',
        title: 'About',
    },
    {
        id: 3,
        href: '#Skills',
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

    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        let newActiveSection = null;

        sections.current.forEach((section: any) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset
                < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });

        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        // @ts-ignore
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeStyle = {
        color: '#20c997',
    };


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
                        <li className={activeSection === t.title ? 'active' : ''}>
                            <a href={t.href} className={s.navItem} style={activeSection ===
                            t.title ? activeStyle : {}}>{t.title}
                            </a>
                        </li>
                    </ul>
                )}
            </div>
            <IconsSocial/>
        </div>
    );
};

export default Header;