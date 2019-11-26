import React from 'react';
import styles from './SkillItem.module.css';

function SkillItem(props) {
    return (
        <li className={styles.skill}>
            <figure className={styles.iconWrapper}>
                <img className={styles.imageIcon} src={props.icon} alt='Skill Icon'/>
            </figure>
            <title className={styles.title}>
                {props.title}
            </title>
            <figcaption className={styles.description}>
                {props.description}
            </figcaption>
        </li>
    );
}

export default SkillItem;
