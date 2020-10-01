import { combineReducers } from 'redux'
import foldersReducer from "./foldersReducer";
import foldersInputReducer from "./foldersInputReducer";
import openDialogReducer from "./openDialogReducer";

export default combineReducers({
    foldersReducer,
    foldersInputReducer,
    openDialogReducer
})