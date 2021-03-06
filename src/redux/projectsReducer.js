import React from "react"

import CounterImg from "../assets/Image/projects/counterIcon.svg"
import WishesListsImg from "../assets/Image/projects/whishesList.jpg"
import ToDoListsImg from "../assets/Image/projects/ToDoList.jpg"
import AuthenticationImg from '../assets/Image/projects/authentication.png'
import SocialNetworkImg from '../assets/Image/projects/socialNetwork.jpg'
import TemplatesTypesriptImg from '../assets/Image/projects/templateTypescript.png'


export const SET_PROJECT = 'PORTFOLIO/SET_PROJECT';

const initialState = {
    projects: [
        {
            title: 'ToDoList (online) in progress',
            bg: ToDoListsImg,
            url: 'https://ibulavsky.github.io/to-do-lists-online/',
            gitUrl: 'https://github.com/ibulavsky/to-do-lists-online',
            description: <>
                This project implements To-Do lists.
                User's data is stored in <b>server</b>.
                The <b>axios</b> library is used for ajax requests, and <b>redux</b> is the bll level.
                This project uses <b>Ant.design</b>.
                The UI is implemented on functional components with <b>hooks</b> of <b>react</b>.</>
        },
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
            title: 'Templates (typescript) in progress',
            bg: TemplatesTypesriptImg,
            url: 'https://github.com/ibulavsky/register_login',
            gitUrl: 'https://github.com/ibulavsky/register_login',
            description: <>
                This project implements templates (login, register, forgot, modals, table pages ) .
                User's data is stored on <b>heroku hosting</b>. This project uses <b>typescript</b>.
                The UI is implemented on functional components with <b>hooks</b> of <b>react</b>.
                <b>Redux</b> is the bll level.</>
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

