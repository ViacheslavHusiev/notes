import {
  ADD_FOLDER,
  CLOSE_FOLDER_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER,
  OPEN_FOLDER_TITLE_DIALOG
} from '../actionTypes'

export const addFolder = (folder) => ({
  type: ADD_FOLDER,
  folder
})
export const editFolder = (index, folder) => ({
  type: EDIT_FOLDER,
  index,
  folder
})
export const deleteFolder = (index, folder) => ({
  type: DELETE_FOLDER,
  index,
  folder
})
export const openDialog = (open) => ({
  type: OPEN_FOLDER_TITLE_DIALOG,
  open
})
export const closeDialog = (open) => ({
  type: CLOSE_FOLDER_TITLE_DIALOG,
  open
})
