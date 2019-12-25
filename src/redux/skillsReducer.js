import JSIcon from "../assets/Image/Icons/jsBlackItem.svg"
import ReactIcon from "../assets/Image/Icons/reactBlackIcon.svg"
import ReduxIcon from "../assets/Image/Icons/reduxBlackIcon.svg"
import HTMLIcon from "../assets/Image/Icons/htmlBlackIcon.svg"
import CSSIcon from "../assets/Image/Icons/cssBlackIcon.svg"
import GitIcon from "../assets/Image/Icons/githubBlackItem.svg"

export const SET_SKILL = 'PORTFOLIO/SET_SKILL';

const initialState = {
    skills: [
        {
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam.' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: JSIcon
        },
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: ReactIcon,
        },
        {
            title: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: ReduxIcon,
        },
        {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: HTMLIcon
        },
        {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: CSSIcon,
        },
        {
            title: 'GIT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aam non, nulla optio pariatur porro quae quam',
            icon: GitIcon,
        },
    ]
};

const skillsReducer = (state = initialState, action) => {
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

export default skillsReducer;

// ACTION CREATORS:
// export const setAuthentication = (isAuthentication) => (
//     {type: SET_AUTHENTICATION, isAuthentication}
// );

