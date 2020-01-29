import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './AboutMe.module.css';
import Title from "../../common/Title";
import myPhoto from '../../assets/Photo/myPhoto_.jpg'

const AboutMe = () => (
    <div id='aboutme' className={styles.greeting}>
        <Fade bottom>
            <Title title={'About me'}/>
            <div className={styles.description}>
                <img alt='Igor' src={myPhoto} className={styles.photo}/>
                <div>My name is Igor. I'm 25 years old.
                    I graduated from Belarussian National Technical University in 2016. I am working as design
                    engineer.
                    I fond of front-end development. I am attending courses, which called "it-incubator". I know js,
                    typescript, react, css.
                    Also I like to spend free time with my friends.
                </div>
            </div>
        </Fade>
    </div>
)

export default AboutMe;
