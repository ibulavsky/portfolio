import React from 'react';
import styles from './Greeting.module.css';
import Title from "./common/Title";

function Greeting() {
  return (
    <div className={styles.greeting}>
      <Title title={'Обо мне'} />
    </div>
  );
}

export default Greeting;
