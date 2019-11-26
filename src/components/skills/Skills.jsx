import React from 'react';
import styles from './Skills.module.css';
import SkillItem from "./SkillItem";
import Title from "../../common/Title";


import CSSIcon from "../../assets/Image/cssBlackIcon.svg"
import HTMLIcon from "../../assets/Image/htmlBlackIcon.svg"
import JSIcon from "../../assets/Image/jsBlackItem.svg"
import ReactIcon from "../../assets/Image/reactBlackIcon.svg"
import ReduxIcon from "../../assets/Image/reduxBlackIcon.svg"
import GitIcon from "../../assets/Image/githubBlackItem.svg"

function Skills() {

    let skills = [
        {
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam.' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: JSIcon
        },
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: ReactIcon,
        },
        {
            title: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: ReduxIcon,
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: HTMLIcon
        },
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: CSSIcon,
        },
        {
            title: 'GIT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: GitIcon,
        },

    ];

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title title={'My Skills'}/>
                <ul className={styles.items}>
                    {skills.map((s, index) => (
                        <SkillItem key={index} title={s.title} description={s.description} icon={s.icon}/>))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
