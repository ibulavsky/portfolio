import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.title}>Булавский Игорь</span>
                <div className={styles.social}>
                    <div className={styles.icon}>VK</div>
                    <div className={styles.icon}>LIn</div>
                    <div className={styles.icon}>CodWars</div>
                    <div className={styles.icon}>Git</div>
                </div>
                <span className={styles.copyright}>2019 © Все права защищены.</span>
            </div>
        </div>
    );
}

export default Footer;
