import React from 'react';
import logo from './logo.svg';
import styles from './Skills.module.css';
import SkillItem from "./SkillItem";

function Skills() {

    let skills = [
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam'
        },
        {
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam.' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam'
        },
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam'
        },
    ];

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <span className={styles.title}>
                    My Skills
                </span>
                <div className={styles.items}>
                    {skills.map( s=> <SkillItem title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
