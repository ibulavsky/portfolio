import React from 'react';
import styles from './NavMenu.module.css';

export const navArr = [
    {id: 1, navName: `Main`, path: `#main`},
    {id: 2, navName: `Skills`, path: `#skills`},
    {id: 3, navName: `Projects`, path: `#projects`},
    {id: 4, navName: `About me`, path: `#aboutme`},
    {id: 5, navName: `Contact`, path: `#mail`}
];

const NavMenu = () => {

    const navLinks = navArr.map(link => (
        <div key={link.id} className={styles.linkWrapper}>
            <a href={link.path} className={styles.link}>{link.navName}</a>
        </div>))

    return (
        <div className={styles.navMenu}>
            {navLinks}
        </div>
    );
}

export default NavMenu;
