import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clienteReducer from "./clienteReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
    authReducer,
    sidebarReducer,
    clienteReducer
})
