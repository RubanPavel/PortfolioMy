import React, {FormEvent, useRef} from 'react';
import emailjs from '@emailjs/browser'
import s from './Form.module.css';
import {Button} from "@mui/material";
import Box from "@mui/material/Box";


const Form = () => {


    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('service_Gmail', 'template_1zy61ok', e.target, 'IfZzPryCO8Lhxecfa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (

        <div>
            <div>
                <form className={s.form_dark} onSubmit={sendEmail}>

                    <input type="text" className={s.form_control} placeholder="Name" name="name"/>

                    <input type="email" className={s.form_control} placeholder="Email Address"
                           name="email"/>


                    <textarea className={s.form_control} id="" placeholder="Your message"
                              name="message"></textarea>
                    <Box>
                        <Button
                            variant="contained"
                            type="submit"
                            value="Send Message"
                            sx={{
                                marginTop: '15px',
                                borderRadius: 28,
                                lineHeight: '1.5',
                                color: 'white',
                                padding: '0.8rem 2.6rem',
                                fontWeight: '500',
                                borderWidth: '2px',
                                borderColor: '#20c997',
                                background: '#20c997',
                                "&:hover": {
                                    color: 'white',
                                    borderColor: '#1aa179',
                                    background: '#1aa179',
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    );
};
export default Form;