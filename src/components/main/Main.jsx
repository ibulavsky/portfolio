import React from 'react';
import styles from './Main.module.css';
import myPhoto from '../../assets/Photo/myPhoto.jpg'

const Main = () => (
    <div id="main" className={styles.main}>
        <div className={styles.container}>
            <div className={styles.description}>
                <span>May the <label>Force</label> be with you!</span>
                <span>I'm <label>Igor Bulavsky</label></span>
                <h1>Front-end developer </h1>
            </div>
            <div className={styles.photo}>
                <img src={myPhoto} alt={"Igor"}/>
            </div>
        </div>
    </div>
)

export default Main;
