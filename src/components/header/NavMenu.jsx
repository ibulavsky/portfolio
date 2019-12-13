import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <div className={styles.linkWrapper} ><a href="#main" className={styles.link}>Main</a></div>
            <div className={styles.linkWrapper}><a href="#skills" className={styles.link}>Skills</a></div>
            <div className={styles.linkWrapper}><a href="#projects" className={styles.link}>Projects</a></div>
            <div className={styles.linkWrapper}><a href="#mail" className={styles.link}>Contacts</a></div>
        </div>
    );
}

export default NavMenu;
