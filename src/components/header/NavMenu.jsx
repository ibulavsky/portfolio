import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <div className={styles.linkWrapper} ><a href="/" className={styles.link}>Main</a></div>
            <div className={styles.linkWrapper}><a href="/" className={styles.link}>Skills</a></div>
            <div className={styles.linkWrapper}><a href="/" className={styles.link}>Projects</a></div>
            <div className={styles.linkWrapper}><a href="/" className={styles.link}>Contacts</a></div>
        </div>
    );
}

export default NavMenu;
