import React from 'react';
import logo from './logo.svg';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.title}>
                    My Skills
                </div>
                <div className={styles.items}>
                    <span className={styles.skillItem}>CSS</span>
                    <span className={styles.skillItem}>JS</span>
                    <span className={styles.skillItem}>React</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;
