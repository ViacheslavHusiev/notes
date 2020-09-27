import {ADD_FOLDER, } from "./types";

const initialState = {
    folders: []

}

export const foldersReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FOLDER:
            // return {...state, folders: state.folders.concat([action.payload])}
            return {...state, folders: [...state.folders, action.payload]}
        default: return state
    }
}

