import React, {useState} from 'react';
import styles from './SkillItem.module.css';

const SkillItem = (props) => {

    const [currentIcon, setIcon] = useState(props.icon)

    return (
        <li className={styles.skill}>
            <figure className={styles.iconWrapper}>
                <img className={styles.imageIcon} src={currentIcon}
                     onMouseEnter={() => setIcon(props.blackIcon)}
                     onMouseLeave={() => setIcon(props.icon)}
                     alt='Skill Icon'/>
            </figure>
            <title className={styles.title}>
                {props.title}
            </title>
            <figcaption className={styles.description}>
                {props.description}
            </figcaption>
        </li>
    );
}

export default SkillItem;
