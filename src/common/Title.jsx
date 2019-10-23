import styles from "./Title.module.css";
import React from "react";


const Title = (props) => {

    return (
        <div className={styles.headerTitle}>
            <h2 className={styles.title}>
                {props.title}
            </h2>
            <div className={styles.line}> </div>
        </div>
    )
};

export default Title

