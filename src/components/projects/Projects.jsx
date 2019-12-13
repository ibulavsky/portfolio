import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";
import Title from "../../common/Title";
import CounterImg from "../../assets/Image/counterIcon.svg"
import WishesListsImg from "../../assets/Image/projects/whishesList.jpg"

function Projects() {

    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.container}>
                <Title title={'My projects'}/>
                <div className={styles.wrapper}>
                    <ProjectItem title='Counter' bg={CounterImg} description='UI -> React, BLL -> Redux'/>
                    <ProjectItem title='Counter' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eaque eum nostrum officia similique. Aliquam dolor
    dolorum exercitationem hic laborum natus nihil, odit pariatur, perferendis qui, similique ullam unde voluptatem
    voluptatibus.'/>
                    <ProjectItem title='WishesList' bg={WishesListsImg} description='UI -> React, BLL -> Redux'/>
                    <ProjectItem title='SocialNetwork' description='UI -> React, BLL -> Redux'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
