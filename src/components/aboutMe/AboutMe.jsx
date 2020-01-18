import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './AboutMe.module.css';
import Title from "../../common/Title";

const AboutMe = () => (
        <div id='about' className={styles.greeting}>
            <Fade bottom>
            <Title title={'About me'}/>
            {/*<img src={''} className={styles.photo}/>*/}
            <div className={styles.description}>
                <p>My name is Igor. I'm 25 years old.</p>
                <p>I graduated from Belarussian National Technical University in 2016. I am working as design
                    engineer.</p>
                <p>I fond of front-end development. I am attending courses, which called "it-incubator". I know js,
                    typescript, react, css.</p>
                <p>Also I like to spend free time with my friends. </p>
            </div>
            </Fade>
        </div>
)

export default AboutMe;
