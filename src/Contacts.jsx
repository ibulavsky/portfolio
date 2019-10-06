import React from 'react';
import logo from './logo.svg';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <form className={styles.formWrapper}>

                    <input className={styles.inputForm} placeholder="Name"/>
                    <input className={styles.inputForm} placeholder="Eamil"/>
                    <textarea className={styles.message} placeholder="Please, write message."/>
                    <button className={styles.button} type="submit"> Send</button>
                </form>
            </div>


        </div>
    );
}

export default Contacts;
