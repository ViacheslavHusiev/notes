import { combineReducers } from 'redux'
import {
  ADD_FOLDER, CLOSE_FOLDER_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER, OPEN_FOLDER_TITLE_DIALOG,
  RESET_INPUT,
  SET_INPUT_ID,
  SET_INPUT_TITLE
} from './actionTypes'

const initialFoldersState = {
  folders: []
}

export function foldersReducer (state = initialFoldersState, action) {
  switch (action.type) {
    case ADD_FOLDER: {
      const folders = [...state.folders]
      folders.push(action.folder)
      return [
        folders
      ]
    }
    case DELETE_FOLDER: {
      const { index } = action
      const folders = []
      state.folders.forEach((folder, i) => {
        if (index !== i) {
          folders.push(folder)
        }
      })
      return {
        folders
      }
    }
    case EDIT_FOLDER: {
      const { index, folder } = action
      const folders = [...state.folders]
      folders[index] = folder
      return {
        folders
      }
    }
    default:
      return state
  }
}

const initialInputFoldersState = {
  id: '',
  title: ''
}

export function foldersInputReducer (state = initialInputFoldersState, action) {
  switch (action.type) {
    case SET_INPUT_TITLE: {
      const { title } = action
      return {
        ...state,
        title
      }
    }
    case SET_INPUT_ID: {
      const { id } = action
      return {
        ...state,
        id
      }
    }
    case RESET_INPUT: {
      return initialInputFoldersState
    }
    default:
      return state
  }
}

const initialStateDialog = {
  open: false
}

export function openDialogReducer (state = initialStateDialog, action) {
  switch (action.type) {
    case OPEN_FOLDER_TITLE_DIALOG: {
      return { ...state, open: true }
    }
    case CLOSE_FOLDER_TITLE_DIALOG: {
      return { ...state, open: false }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  foldersReducer,
  foldersInputReducer,
  openDialogReducer
})

export default rootReducer
