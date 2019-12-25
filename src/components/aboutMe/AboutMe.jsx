import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './AboutMe.module.css';
import Title from "../../common/Title";

const AboutMe = () => (
    <div id='about' className={styles.greeting}>
        <Fade right>
            <Title title={'About me'}/>
            <div className={styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </Fade>
    </div>
)

export default AboutMe;
