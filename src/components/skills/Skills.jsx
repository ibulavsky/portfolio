import React from 'react';
import styles from './Skills.module.css';
import SkillItem from "./SkillItem";
import Title from "../../common/Title";


import CSSIcon from "../../assets/Image/Icons/cssBlackIcon.svg"
import HTMLIcon from "../../assets/Image/Icons/htmlBlackIcon.svg"
import JSIcon from "../../assets/Image/Icons/jsBlackItem.svg"
import ReactIcon from "../../assets/Image/Icons/reactBlackIcon.svg"
import ReduxIcon from "../../assets/Image/Icons/reduxBlackIcon.svg"
import GitIcon from "../../assets/Image/Icons/githubBlackItem.svg"

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
        <div id="skills" className={styles.skills}>
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
