import React, {useState} from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = (props) => {

    const [opacity, setOpacity] = useState('0')

    const showButton = () => setOpacity('1');

    const hideButton = () => setOpacity('0');

    return (
        <div className={styles.project}>
            <div className={styles.image} onMouseEnter={() => showButton()} onMouseLeave={() => hideButton()}
                 style={{backgroundImage: (`url(${props.bg})`)}}>
                <a className={styles.showButton} style={{opacity: opacity}} href='/'>Open</a>
            </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default ProjectItem;
