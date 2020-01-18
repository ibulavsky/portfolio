import JSIcon from "../assets/Image/Icons/whiteIcon/jsWhiteItem.gif"
import ReactIcon from "../assets/Image/Icons/whiteIcon/reactWhiteIcon.gif"
import ReduxIcon from "../assets/Image/Icons/whiteIcon/reduxWhiteIcon.gif"
import HTMLIcon from "../assets/Image/Icons/whiteIcon/htmlWhiteIcon.gif"
import CSSIcon from "../assets/Image/Icons/whiteIcon/cssWhiteIcon.gif"
import GitIcon from "../assets/Image/Icons/whiteIcon/githubWhiteItem.gif"

import JSBlackIcon from "../assets/Image/Icons/blackIcon/jsBlackItem.gif"
import ReactBlackIcon from "../assets/Image/Icons/blackIcon/reactBlackIcon.gif"
import ReduxBlackIcon from "../assets/Image/Icons/blackIcon/reduxBlackIcon.gif"
import HTMLBlackIcon from "../assets/Image/Icons/blackIcon/htmlBlackIcon.gif"
import CSSBlackIcon from "../assets/Image/Icons/blackIcon/cssBlackIcon.gif"
import GitBlackIcon from "../assets/Image/Icons/blackIcon/githubBlackItem.gif"

export const SET_SKILL = 'PORTFOLIO/SET_SKILL';

const initialState = {
    skills: [
        {
            title: 'JS',
            description: '',
            icon: JSIcon,
            blackIcon: JSBlackIcon
        },
        {
            title: 'React',
            description: '',
            icon: ReactIcon,
            blackIcon: ReactBlackIcon,
        },
        {
            title: 'Redux',
            description: '',
            icon: ReduxIcon,
            blackIcon: ReduxBlackIcon
        },
        {
            title: 'HTML',
            description: '',
            icon: HTMLIcon,
            blackIcon: HTMLBlackIcon,
        },
        {
            title: 'CSS',
            description: '',
            icon: CSSIcon,
            blackIcon: CSSBlackIcon,
        },
        {
            title: 'GIT',
            description: '',
            icon: GitIcon,
            blackIcon: GitBlackIcon,
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

