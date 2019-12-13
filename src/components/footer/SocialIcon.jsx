import React from 'react';
import styles from './Footer.module.css';

function SocialIcon({icon, link}) {
    return (
        <>
            <div className={styles.icon}>
                <a href={link} target="_blank">
                    <img src={icon} alt="" className={styles.iconImg}/>
                </a>
            </div>
        </>
    );
}

export default SocialIcon;
