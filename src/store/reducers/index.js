import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clienteReducer from "./clienteReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";

export default combineReducers({
    authReducer,
    sidebarReducer,
    clienteReducer,
    userReducer
})
