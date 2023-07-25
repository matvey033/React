import {combineReducers, legacy_createStore as createStore} from "redux"; 
import { messagesReducer } from "./messages-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;