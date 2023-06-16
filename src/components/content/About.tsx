import React from 'react';
import s from "./About.module.css";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Download from "@mui/icons-material/Download";

const About = () => {

  return (
    <div data-section id='About'>
      <a id={'About'}></a>
      <div className={s.aboutContainer}>
        <h2 className={s.aboutTitle}> ABOUT ME</h2>

        <div className={s.aboutContent}>

          <div className={s.aboutText}>
            <h2>I'm <span>Pavel Ruban</span>, a Frontend Developer</h2>
            <p>I help you build brand for your business at an affordable price. Thousands of clients have
              procured exceptional results while working with our dedicated team. when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. I help you build brand
              for your business at an affordable price. Thousands of clients have procured exceptional
              results while working with our dedicated team. when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className={s.aboutInfo}>
            <ul className={s.aboutUl}>
              <li className={s.aboutLi}>Name:Pavel Ruban</li>
              <li className={s.aboutLi}>Email:Ruban.public@gmail.com</li>
              <li className={s.aboutLi}>Age:23</li>
              <li className={s.aboutLi}>From:Minsk, Belarus</li>
            </ul>
            <Box className={s.aboutButton}>
              <Button
                variant="outlined"
                href="#contained-buttons"
                endIcon={<Download/>}
                sx={{
                  borderRadius: 28,
                  color: '#20c997',
                  borderColor: '#20c997',
                  "&:hover": {
                    color: '#20c997',
                    borderColor: '#20c997'
                  }
                }}
              >
                Download CV
              </Button>
            </Box>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;