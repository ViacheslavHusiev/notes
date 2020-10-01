import actionTypes from "../actionTypes";

const initialState = {
    id: -1,
    title: '',
    selected: false
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_TITLE: {
            const {title} = action;
            return {
                ...state,
                title,
            }
        }
        case actionTypes.SET_INPUT_ID: {
            const {id} = action;
            return {
                ...state,
                id ,
            }
        }
        case actionTypes.RESET_INPUT: {
            return initialState;
        }
        case actionTypes.SELECT_FOLDER:
            return {
                ...state,
                selected: true
            }
        default:
            return state
    }
}