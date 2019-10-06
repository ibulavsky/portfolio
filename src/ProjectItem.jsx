import React from 'react';
import styles from './ProjectItem.module.css';

function ProjectItem(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <a className={styles.showButton} href='/'>Смотреть</a>
            </div>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default ProjectItem;
