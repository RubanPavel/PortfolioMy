import React from 'react';
import s from './Footer.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {IconsSocial} from "../iconsSocial/IconsSocial";
import {createTheme, ThemeProvider} from "@mui/material";

const arrAddressInfo = [
    {
        id: 1,
        info: '+375297777777',
        src: 'https://cdn-icons-png.flaticon.com/512/5585/5585562.png',
        alt: 'tel'
    },
    {
        id: 2,
        info: 'Minsk, Belarus',
        src: 'https://cdn-icons-png.flaticon.com/512/5585/5585562.png'
    },
    {
        id: 3,
        info: 'ruban.public@gmail.com',
        src: 'https://cdn-icons-png.flaticon.com/512/5585/5585562.png'
    },
]


const Footer = () => {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536 // large screens
            }
        }
    });

    return (
        <div className={s.footerWrapper}>
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
                                <img className={s.linkHeaderImg}
                                     alt={t.alt}
                                     src={t.src}
                                />
                                {t.info}
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
                    <form>
                        <ThemeProvider theme={theme}>
                            <Box className={s.footerInputTop}
                                 component="form"
                                 sx={{

                                     maxWidth: '100%',
                                     '& .MuiTextField-root': {m: 1},

                                 }}
                                 noValidate
                                 autoComplete="off"
                            >
                                <TextField required
                                           fullWidth
                                           id="outlined-required"
                                           label="Name"
                                />
                                <TextField required
                                           fullWidth
                                           id="outlined-required"
                                           label="Email"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={8}

                                />
                            </Box>
                        </ThemeProvider>
                    </form>

                </div>

            </div>
            <div className={s.bottomFooterCont}>

                <p className={s.bottomFooterH2}> Minsk, Belarus</p>
                <p className={s.bottomFooterH2}>© 2023 All Rights Reserved</p>


            </div>
        </div>
    );
};

export default Footer;