import {combineReducers} from "redux";
import {foldersReducer} from "./foldersReducer";

export const rootReducer = combineReducers({
    folders: foldersReducer
})