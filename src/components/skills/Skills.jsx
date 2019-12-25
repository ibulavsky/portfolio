import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './Skills.module.css';
import SkillItem from "./SkillItem";
import Title from "../../common/Title";

import {useSelector} from "react-redux"


const Skills = () => {

    let skills = useSelector(state => state.skills.skills);

    return (
        <div id="skills" className={styles.skills}>
            <Fade right>
                <div className={styles.container}>
                    <Title title={'My Skills'}/>
                    <ul className={styles.items}>
                        {skills.map((s, index) => (
                            <SkillItem key={index} title={s.title} description={s.description} icon={s.icon}/>))}
                    </ul>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
