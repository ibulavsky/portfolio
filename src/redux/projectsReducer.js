import React from "react"

import CounterImg from "../assets/Image/projects/counterIcon.svg"
import WishesListsImg from "../assets/Image/projects/whishesList.jpg"
import AuthenticationImg from '../assets/Image/projects/authentication.png'
import SocialNetworkImg from '../assets/Image/projects/socialNetwork.jpg'


export const SET_PROJECT = 'PORTFOLIO/SET_PROJECT';

const initialState = {
    projects: [
        {
            title: 'WishesList (localStorage)',
            bg: WishesListsImg,
            url: 'https://ibulavsky.github.io/wishes-lists/',
            gitUrl: 'https://github.com/ibulavsky/wishes-lists',
            description: <>
                This project implements wishes lists.
                User's data is stored in <b>localStorage</b>. This project uses <b>Ant.design</b>.
                The UI is implemented on functional components with <b>hooks</b> of <b>react</b>.
                <b> Redux</b> is the bll level.</>
        },
        {
            title: 'WishesList',
            bg: WishesListsImg,
            description: 'UI -> React, BLL -> Redux'
        },
        {
            title: 'Social Network',
            bg: SocialNetworkImg,
            url: 'https://ibulavsky.github.io/social-network-react/',
            gitUrl: 'https://github.com/ibulavsky/social-network-react',
            description: <>
                This project implements social network.
                The UI is implemented on the class and functional components with hooks of <b>react</b>.
                The <b>axios</b> library is used for ajax requests, and <b>redux</b> is the bll level.</>
        },
        {
            title: 'Authentication',
            bg: AuthenticationImg,
            url: 'https://ibulavsky.github.io/authentication/',
            gitUrl: 'https://github.com/ibulavsky/authentication',
            description: <>
                This project implements user authentication based on a request to a pseudo-API (login:
                Admin, password: 111111).
                User data (token) is stored in <b>localStorage</b>. "Endless" scrolling (with loading of the following
                posts). The UI is implemented on the class and functional components of <b>react</b>.
                The <b>axios</b> library is used for ajax requests, and <b>redux</b> is the bll level.</>
        },
        {
            title: 'Counter',
            bg: CounterImg,
            url: 'https://ibulavsky.github.io/easy-counter/',
            gitUrl: 'https://github.com/ibulavsky/easy-counter',
            description: <>
                This is one of my first projects.
                This project implements counter. You can change the maximum and minimum value.
                The UI is implemented on the class and functional components of <b>react</b>.
                <b> Redux</b> is the bll level.</>,
        },


    ]
};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_SKILL:
        //     return {
        //         ...state,
        //         isAuthentication: action.isAuthentication,
        //     };
        default:
            return state
    }
};

export default projectsReducer;

// ACTION CREATORS:
// export const setAuthentication = (isAuthentication) => (
//     {type: SET_AUTHENTICATION, isAuthentication}
// );

