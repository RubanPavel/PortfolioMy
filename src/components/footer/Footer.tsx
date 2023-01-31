import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <a id={'Contact'}></a>

            <div className={s.footerTitle}>Contact</div>
            <div className={s.footerContainer}>

                <div className={s.footerInfo}>
                    <div>
                        <h2 className={s.footerH2}>Adress</h2>
                        <p>+375294848484</p>
                        <p>+375294848484</p>
                        <p>+375294848484</p>
                        <p>Gmail@gmaio.com</p>
                    </div>


                </div>

                <div className={s.footerForm}>
                    <h2 className={s.footerH2}>FORMFORMFORM</h2>

                    <form>

                        <div className={s.footerInputTop}>
                            <input className={s.inputControl} type={"text"} placeholder={'Name'}/>
                            <input className={s.inputControl} type={"email"} placeholder={'Email'}/>

                        </div>

                        <textarea className={s.inputControl2}  placeholder={'TextTextTextText'}/>

                    </form>


                </div>

            </div>
        </div>
    );
};

export default Footer;