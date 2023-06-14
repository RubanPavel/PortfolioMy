import React from 'react';
import s from './iconsSocial.module.css'
import git from '../../assets/svgSocial/iconmonstr-github-3.svg'
import gmail from '../../assets/svgSocial/iconmonstr-gmail-3.svg'
import telegram from '../../assets/svgSocial/iconmonstr-telegram-3.svg'
import linkedIn from '../../assets/svgSocial/iconmonstr-linkedin-3.svg'

const arrSocialIcons = [
    {
        id: 1,
        href: 'https://github.com/RubanPavel',
        src: git,
        alt: 'Git',
    },
    {
        id: 2,
        href: 'https://github.com/RubanPavel',
        src: gmail,
        alt: 'Gmail',
    },
    {
        id: 3,
        href: 'https://github.com/RubanPavel',
        src: linkedIn,
        alt: 'LinkedIn',
    },
    {
        id: 4,
        href: 'https://github.com/RubanPavel',
        src: telegram,
        alt: 'telegram',
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

