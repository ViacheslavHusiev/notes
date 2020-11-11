import { combineReducers } from 'redux'
import {
  ADD_FOLDER,
  CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  CLOSE_FOLDER_CONTEXT_MENU,
  CLOSE_FOLDER_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER,
  OPEN_FOLDER_CONTEXT_MENU,
  OPEN_FOLDER_TITLE_DIALOG,
  OPEN_FOR_EDIT_FOLDER_TITLE_DIALOG,
  RESET_INPUT,
  SET_ACTIVE_FOLDER_ID,
  SET_INPUT_TITLE,
} from './actionTypes'

const initialFoldersState = {
  folders: [],
  open: false,
  openForEdit: false,
  mouseX: null,
  mouseY: null,
  title: '',
  selectedFolderId: ''
}

export function foldersReducer (state = initialFoldersState, action) {
  switch (action.type) {
    case ADD_FOLDER: {
      const folders = [...state.folders]
      folders.push(action.folder)
      return {
        ...state,
        folders
      }
    }
    case DELETE_FOLDER: {
      const folders = []
      const selectedFolderId = state.selectedFolderId
      const selectedFolderIndex = state.folders.findIndex(
        folder => folder.id === selectedFolderId
      )
      state.folders.forEach((folder, i) => {
        if (selectedFolderIndex !== i) {
          folders.push(folder)
        }
      })
      return {
        ...state,
        folders
      }
    }
    case EDIT_FOLDER: {
      const folders = [...state.folders]
      const selectedFolderId = state.selectedFolderId
      const selectedFolderIndex = folders.findIndex(
        folder => folder.id === selectedFolderId
      )
      folders[selectedFolderIndex].title = state.title
      return {
        ...state,
        folders
      }
    }
    case OPEN_FOLDER_TITLE_DIALOG: {
      return { ...state, open: true }
    }
    case CLOSE_FOLDER_TITLE_DIALOG: {
      return { ...state, open: false }
    }
    case OPEN_FOR_EDIT_FOLDER_TITLE_DIALOG: {
      return { ...state, openForEdit: true }
    }
    case CLOSE_EDIT_FOLDER_TITLE_DIALOG: {
      return { ...state, openForEdit: false, title: '' }
    }
    case OPEN_FOLDER_CONTEXT_MENU: {
      const { mouseX, mouseY } = action
      return {
        ...state,
        mouseX,
        mouseY
      }
    }
    case CLOSE_FOLDER_CONTEXT_MENU: {
      return {
        ...state,
        mouseX: null,
        mouseY: null
      }
    }
    case SET_INPUT_TITLE: {
      const { title } = action
      return {
        ...state,
        title
      }
    }
    case SET_ACTIVE_FOLDER_ID: {
      const { selectedFolderId } = action
      return {
        ...state,
        selectedFolderId
      }
    }
    case RESET_INPUT: {
      return {
        ...state,
        title: ''
      }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  foldersReducer
})

export default rootReducer
