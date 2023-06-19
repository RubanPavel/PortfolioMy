import React from 'react';
import s from './Footer.module.css';
import Box from '@mui/material/Box';
import {IconsSocial} from "../iconsSocial/IconsSocial";
import location from '../../assets/svgContact/location.svg'
import telephone from '../../assets/svgContact/telephone.svg'
import mail from '../../assets/svgContact/mail.svg'
import Form from "./Form/Form";
import FotterContent from "./Form/FotterContent";


const arrAddressInfo = [
    {
        id: 1,
        info: '+375 29 115-81-65',
        src: telephone,
        alt: 'telephone'
    },
    {
        id: 2,
        info: 'Minsk, Belarus',
        src: location,
        alt: 'location'
    },
    {
        id: 3,
        info: 'Ruban.public@gmail.com',
        src: mail,
        alt: 'mail'
    },
]


const Footer = () => {
    return (
        <div data-section id="Contact"  className={s.footerWrapper}>
            <a id={'Contact'}></a>
            <div className={s.footerTitleTop}>

                <h2 className={s.footerTitle}>Contact</h2>
            </div>

            <div className={s.footerContainer}>
                <div className={s.footerInfo}>
                    <h2 className={s.footerH2}>ADDRESS</h2>
                    {arrAddressInfo.map(t =>
                        <div className={s.linkHeaderCont} key={t.id}>
                            <p className={s.linkHeader}>
                                <span>
                                    <img className={s.linkHeaderImg}
                                         alt={t.alt}
                                         src={t.src}
                                    />
                                </span>
                                <span style={{paddingBottom: '2px'}}>{t.info}</span>

                            </p>
                        </div>
                    )}
                    <div>
                        <h2 className={s.footerH2}>FOLLOW ME</h2>
                        <Box>
                            <IconsSocial/>
                        </Box>

                    </div>
                </div>
                <div className={s.footerForm}>
                    <h2 className={s.footerH2}>SEND US A NOTE</h2>
                    <Form/>
                </div>

            </div>

            <FotterContent/>
        </div>
    );
};

export default Footer;