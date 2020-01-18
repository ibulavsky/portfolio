import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './Skills.module.css';
import SkillItem from "./SkillItem";
import Title from "../../common/Title";

import {useSelector} from "react-redux"
// import {animation} from "react-reveal/src/lib/globals"


const Skills = () => {

    let skills = useSelector(state => state.skills.skills);

    return (
        <div id="skills" className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <Title title={'My Skills'}/>
                    <ul className={styles.items}>
                        {skills.map((s, index) => (
                            <SkillItem key={index} title={s.title} description={s.description} icon={s.icon} blackIcon={s.blackIcon}/>))}
                    </ul>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
