import React from 'react';
import styles from './ProjectItem.module.css';

function ProjectItem(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={{backgroundImage: (`url(${props.bg})`)}}>
                <a className={styles.showButton} href='/'>Open</a>
            </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default ProjectItem;
