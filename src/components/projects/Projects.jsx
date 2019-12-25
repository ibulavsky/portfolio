import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";
import Title from "../../common/Title";
import {useSelector} from "react-redux"

const Projects = () => {

    const projects = useSelector(state => state.projects.projects);

    return (
        <div id="projects" className={styles.projects}>
            <Fade left>
                <div className={styles.container}>
                    <Title title={'My projects'}/>
                    <div className={styles.wrapper}>
                        {
                            projects.map(p => <ProjectItem title={p.title} bg={p.bg}
                                                           description={p.description}/>)
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
