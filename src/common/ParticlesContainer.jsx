import React from 'react';
import Particles from "react-particles-js"

import styles from './Particles.module.css'

const ParticlesContainer = (props) => {
    return (
        <Particles className={styles.Particles}
            params={{
                particles: {
                    number: {value: 400, density: {enable: true, value_area: 800}},
                    color: {value: "#16a085"},
                    shape: {
                        type: "circle",
                        stroke: {width: 0, color: "#222"},
                        polygon: {nb_sides: 5},
                    },
                    opacity: {
                        value: 0.3,
                        random: true,
                        anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false}
                    },
                    size: {
                        value: 10,
                        random: true,
                        anim: {enable: false, speed: 40, size_min: 0.1, sync: false}
                    },
                    line_linked: {enable: false, distance: 500, color: "#ffffff", opacity: 0.4, width: 2},
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "bottom-left",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {enable: false, rotateX: 600, rotateY: 1200}
                    }
                }, interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {enable: true, mode: "bubble"},
                        onclick: {enable: true, mode: "push"},
                        resize: true
                    },
                    modes: {
                        grab: {distance: 400, line_linked: {opacity: 0.5}},
                        bubble: {distance: 100, size: 4, duration: 0.3, opacity: 0.8, speed: 3},
                        repulse: {distance: 100, duration: 0.4},
                        push: {particles_nb: 4},
                        remove: {particles_nb: 2}
                    }
                }
            }}/>
    )
}
export default ParticlesContainer;
