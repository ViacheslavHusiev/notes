import actionTypes from "../actionTypes";

export default {
    setInputTitle: title => ({
        type: actionTypes.SET_INPUT_TITLE,
        title
    }),
    setInputId: id => ({
        type: actionTypes.SET_INPUT_ID,
        id,
    }),
    resetInputs: () => ({
        type: actionTypes.RESET_INPUT,
    }),
    selectFolder: (selected) => ({
        type: actionTypes.SELECT_FOLDER,
        selected
    })
}
