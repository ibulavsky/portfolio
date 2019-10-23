import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/" className={styles.link}>Skills</a>
            <a href="/" className={styles.link}>Проекты</a>
            <a href="/" className={styles.link}>Контакты</a>
        </div>
    );
}

export default NavMenu;
