import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from './Footer.module.css';
import Title from "../../common/Title";
import telegram from '../../assets/Image/contacts/telegram.svg'
import vk from '../../assets/Image/contacts/vk.svg'
import linkedin from '../../assets/Image/contacts/linkedin.svg'
import github from '../../assets/Image/contacts/github.svg'
import SocialIcon from "./SocialIcon"


const Footer = () => (
    <div id='social' className={styles.footer}>
        <Fade clear>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Title title={'Social'}/>
                </div>
                <div className={styles.social}>
                    <SocialIcon icon={telegram} link={'https://t.me/ibulavsky'}/>
                    <SocialIcon icon={vk} link={'https://vk.com/igor_bulavsky'}/>
                    <SocialIcon icon={linkedin} link={'https://www.linkedin.com/in/igor-bulavsky-a8b8b0169'}/>
                    <SocialIcon icon={github} link={'https://github.com/ibulavsky'}/>
                </div>
                <span className={styles.copyright}>2019 © All rights reserved.</span>
            </div>
        </Fade>
    </div>
);

export default Footer;
