import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
    authReducer,
    sidebarReducer,
})
