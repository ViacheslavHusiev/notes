import actionTypes from "../actionTypes";

const initialState ={
    open: false
}

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.OPEN_FOLDER_TITLE_DIALOG:{
            return {...state, open: true }
        }
        case actionTypes.CLOSE_FOLDER_TITLE_DIALOG: {
            return {...state, open: false }
        }
        default:
            return state;
    }
}