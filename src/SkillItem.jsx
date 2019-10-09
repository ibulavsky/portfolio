import React from 'react';
import styles from './SkillItem.module.css';

function SkillItem(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src='' alt='Skill Icon'/>
            </div>
            <span className={styles.title}>
                {props.title}
            </span>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
}

export default SkillItem;
