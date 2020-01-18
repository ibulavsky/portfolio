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
                <a className={styles.showButton} style={{opacity: opacity}} href={props.url} target="_blank">Open</a>
            </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.about}>
            <b>Demo: </b><a href={props.url} target="_blank">Link</a> <br/>
            <b>Git link: </b><a href={props.gitLink} target="_blank">Git Link</a> <br/>
                <details className={styles.description}>
                    <summary className={styles.summary}> Description </summary>
                    {props.description}
                </details>
        </span>
        </div>
    );
}

export default ProjectItem;
