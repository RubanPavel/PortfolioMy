import React from 'react';

import s from './Header.module.css';


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

const arrSocialIcons = [
    {
        id: 1,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'H1',
    },
    {
        id: 2,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'A2',
    },
    {
        id: 3,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'S3',
    },
    {
        id: 4,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'E4',
    }
]


const Header = () => {
    return (
        <div className={s.sideHeader}>
            <div className={s.headerTop}>
                <img className={s.headerImg} alt={'Hello'}
                     src={'https://production-it-incubator.s3.eu-central-1.amazonaws.com/personal-page-front-public%3Aavatar/Image/66b88a92-3920-44f8-8cdf-e55b60d14466_F3.jpg'}/>
                <h1> Pavel Ruban </h1>
            </div>
            <div className={s.headerNav}>
                {arrNavItem.map(t =>
                    <ul className={s.navUl} key={t.id}>
                        <li><a href={t.href} className={s.navItem}>{t.title}</a></li>
                    </ul>
                )}
            </div>
            <div className={s.socialIcons}>
                {arrSocialIcons.map(t =>
                    <span className={s.socialSpan} key={t.id}>
                        <a href={t.href} target={"_blank"}><img className={s.socialIcon} alt={t.alt} src={t.src}/></a>
                    </span>
                )}
            </div>

        </div>
    );
};

export default Header;