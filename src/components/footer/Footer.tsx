import React from 'react';
import s from './Footer.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {IconsSocial} from "../iconsSocial/IconsSocial";
import {createTheme, ThemeProvider} from "@mui/material";
import location from '../../assets/svgContact/location.svg'
import telephone from '../../assets/svgContact/telephone.svg'
import mail from '../../assets/svgContact/mail.svg'
import {red} from "@mui/material/colors";


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


    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536 // large screens
            },

        },
    });

    return (
        <div data-section id="Contact" className={s.footerWrapper}>
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
                      {/*  <ThemeProvider theme={theme}>*/}
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
                                           sx={{"& .MuiOutlinedInput-root.Mui-disabled":{"& > fieldset": {border: '1px solid green'}}}}
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
                       {/* </ThemeProvider>*/}
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