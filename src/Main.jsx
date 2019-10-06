import React from 'react';
import logo from './logo.svg';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Hello! </span>
                    <span>I'm Igor Bulavsky</span>
                    <span> Front-end developer </span>
                </div>
                <div className={styles.photo}>
                    <img src="/" alt="My Photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
