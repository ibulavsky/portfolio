import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";
import Title from "./common/Title";
import {CounterProject} from "./assets/Image/bg-stars.jpg"

function Projects() {

    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <Title title={'My projects'} />
                <div className={styles.wrapper}>
                    <ProjectItem title='Counter' bg={"white"} description='UI -> React, BLL -> Redux'/>
                    <ProjectItem title='Counter' description='UI -> React, BLL -> Redux'/>
                    <ProjectItem title='TodoList' description='UI -> React, BLL -> Redux'/>
                    <ProjectItem title='SocialNetwork' description='UI -> React, BLL -> Redux'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
