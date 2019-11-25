import React from 'react';
import logo from '../../logo.svg';
import styles from './Skills.module.css';
import SkillItem from "./SkillItem";
import Title from "../../common/Title";
import CSSIcon from "../../assets/Image/cssIcon.svg"
import HTMLIcon from "../../assets/Image/htmlIcon.svg"
import JSIcon from "../../assets/Image/jsItem.svg"
import ReactIcon from "../../assets/Image/reactIcon.svg"
import ReduxIcon from "../../assets/Image/reduxIcon.png"

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

    ];

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title title={'My Skills'}/>
                <div className={styles.items}>
                    {skills.map(s => <SkillItem title={s.title} description={s.description} icon={s.icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
