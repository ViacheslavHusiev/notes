import {ADD_FOLDER, SELECT_FOLDER,} from "../actionTypes";

const initialState = {
    folders: [],
    selected: false
}

export const foldersReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FOLDER:
            // return {...state, folders: state.folders.concat([action.payload])}
            return {...state, folders: [...state.folders, action.payload]}
        case SELECT_FOLDER:
            return {...state, selected: true}
        default: return state
    }
}

