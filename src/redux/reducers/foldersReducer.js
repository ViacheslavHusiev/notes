import actionTypes from "../actionTypes";

const initialState = {
    folders: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOLDER:
            const folders = [...state.folders]
            folders.push(action.folder)
            return {
                folders
            }
        case actionTypes.DELETE_FOLDER: {
            const { index } = action;
            const folders = [];
            state.folders.forEach((folder, i) => {
                if(index !== i) {
                    folders.push(folder)
                }
            })
            return {
                folders,
            }
        }
        case actionTypes.EDIT_FOLDER: {
            const { index, folder } = action;
            const folders = [...state.folders];
            folders[index] = folder;
            return {
                folders,
            }
        }
        default:
            return state;
    }
}

