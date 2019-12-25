import React from "react"

import CounterImg from "../assets/Image/counterIcon.svg"
import WishesListsImg from "../assets/Image/projects/whishesList.jpg"


export const SET_PROJECT = 'PORTFOLIO/SET_PROJECT';

const initialState = {
    projects: [
        {
            title: 'Counter',
            bg: CounterImg,
            description: 'UI -> React, BLL -> Redux'
        },
        {
            title: 'WishesList',
            bg: WishesListsImg,
            description: 'UI -> React, BLL -> Redux'
        },
        {
            title: 'WishesList',
            bg: WishesListsImg,
            description: 'UI -> React, BLL -> Redux'
        }
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

