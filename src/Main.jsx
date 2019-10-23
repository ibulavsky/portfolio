import React from 'react';
import styles from './Main.module.css';
import myPhoto from './assets/Photo/myPhoto4.jpg'

function Main() {

let string = 'Lorem ipsum do' +
    'lor sit amet, consectetur' +
    'adipisicing elit. Ab asperiores aspernatur dolores,' +
    ' eius enimste quisquam tenetur voluptatem? Ab a';

return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Да прибудет с Вами <label>СИЛА</label>!</span>
                    <span>Я <label>Игорь Булавский</label></span>
                    <h1>Front-end разработчик </h1>
                </div>
                <div className={styles.photo}>
                    < img src={myPhoto} alt="My Photo"/>

                </div>
            </div>
        </div>
    );
}

export default Main;
