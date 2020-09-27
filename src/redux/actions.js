import {ADD_FOLDER, } from "./types";

export function createFolder(folder) {
    return {
        type: ADD_FOLDER,
        payload: folder
    };
}
