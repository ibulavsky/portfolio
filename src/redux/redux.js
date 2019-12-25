import {combineReducers, createStore} from "redux";
import skillsReducer from "./skillsReducer"
import projectsReducer from "./projectsReducer"

const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
});

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(reducers);
export default store;
