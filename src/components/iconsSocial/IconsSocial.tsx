import React from 'react';
import s from './iconsSocial.module.css'

const arrSocialIcons = [
    {
        id: 1,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'Git',
    },
    {
        id: 2,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'Git',
    },
    {
        id: 3,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'Git',
    },
    {
        id: 4,
        href: 'https://github.com/RubanPavel',
        src: "https://www.svgrepo.com/show/439173/git.svg",
        alt: 'Git',
    }
]

export const IconsSocial = () => {
    return (
        <div className={s.socialIcons}>
            {arrSocialIcons.map(t =>
                <span className={s.socialSpan} key={t.id}>
                    <a href={t.href} target={"_blank"}>
                        <img className={s.socialIcon} alt={t.alt} src={t.src}/>
                    </a>
                </span>
            )}
        </div>)

}

