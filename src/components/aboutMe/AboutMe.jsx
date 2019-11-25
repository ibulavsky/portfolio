import React from 'react';
import styles from './AboutMe.module.css';
import Title from "../../common/Title";

function AboutMe() {
  return (
    <div className={styles.greeting}>
      <Title title={'About me'} />
    </div>
  );
}

export default AboutMe;
