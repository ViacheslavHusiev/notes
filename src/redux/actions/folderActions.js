import actionTypes from "../actionTypes";

export function createFolder(folder) {
    return {
        type: actionTypes.ADD_FOLDER,
        payload: folder
    };
}

