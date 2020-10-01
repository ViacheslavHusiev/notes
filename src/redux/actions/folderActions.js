import actionTypes from "../actionTypes";

export default {
    addFolder:(folder) => ({
        type: actionTypes.ADD_FOLDER,
        folder
    }),
    editFolder: (index, folder) => ({
        type: actionTypes.EDIT_FOLDER,
        index,
        folder
    }),
    deleteFolder: (index, folder) => ({
        type: actionTypes.DELETE_FOLDER,
        index,
        folder
    }),
    openDialog: (open)=> ({
        type: actionTypes.OPEN_FOLDER_TITLE_DIALOG,
        open,
    }),
    closeDialog: (open)=> ({
        type: actionTypes.CLOSE_FOLDER_TITLE_DIALOG,
        open,
    })
}


