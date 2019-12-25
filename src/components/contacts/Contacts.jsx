import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Contacts.module.css';
import Title from "../../common/Title";

class Contacts extends Component {

    state = {status: ""}

    submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
        //     // if (xhr.status === 200) {
        //     //     // form.reset();
        //     //     // this.setState({status: "SUCCESS"});
        //     // } else {
        //     //     // this.setState({status: "ERROR"});
        //     // }
        // };
        xhr.send(data);
    }

    render() {
        const status = this.state;
        return (
            <div id='mail'
                 className={styles.contacts}>
                <Fade left>
                    <div className={styles.container}>
                        <Title title={'Contact'}/>
                        <form action="https://formspree.io/mkngweyz"
                              method="POST"
                              className={styles.formWrapper}
                              onSubmit={this.submitForm}
                        >
                            <input type="text" name="name" className={styles.inputForm} placeholder="Name"/>
                            <input type="email" name="_replyto" className={styles.inputForm} placeholder="Email"/>
                            <textarea name="message" className={styles.message} placeholder="Please, write message."/>
                            {status === "SUCCESS" ? <p className={styles.notification}>Thanks!</p>
                                : <button className={styles.button} type="submit"> Send</button>}
                            {status === "ERROR" &&
                            <p className={styles.notification}>Oops! Error.</p>}
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }


}

export default Contacts;
