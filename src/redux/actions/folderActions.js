import {
  ADD_FOLDER,
  CLOSE_FOLDER_CONTEXT_MENU,
  CLOSE_FOLDER_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER,
  OPEN_FOLDER_CONTEXT_MENU,
  OPEN_FOLDER_TITLE_DIALOG,
  OPEN_FOR_EDIT_FOLDER_TITLE_DIALOG,
  CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  RESET_INPUT,
  SET_ACTIVE_FOLDER_ID,
  SET_INPUT_TITLE
} from '../actionTypes'

export const addFolder = (folder) => ({
  type: ADD_FOLDER,
  folder
})
export const editFolder = () => ({
  type: EDIT_FOLDER
})
export const deleteFolder = () => ({
  type: DELETE_FOLDER
})
export const setInputTitle = title => ({
  type: SET_INPUT_TITLE,
  title
})
export const setActiveFolderId = selectedFolderId => ({
  type: SET_ACTIVE_FOLDER_ID,
  selectedFolderId
})
export const resetInputs = () => ({
  type: RESET_INPUT
})
export const openDialog = open => ({
  type: OPEN_FOLDER_TITLE_DIALOG,
  open
})
export const closeDialog = open => ({
  type: CLOSE_FOLDER_TITLE_DIALOG,
  open
})
export const openEditDialog = openForEdit => ({
  type: OPEN_FOR_EDIT_FOLDER_TITLE_DIALOG,
  openForEdit
})
export const closeEditDialog = openForEdit => ({
  type: CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  openForEdit
})
export const openContextMenu = (mouseX, mouseY) => ({
  type: OPEN_FOLDER_CONTEXT_MENU,
  mouseX: mouseX,
  mouseY: mouseY
})
export const closeContextMenu = (mouseX, mouseY) => ({
  type: CLOSE_FOLDER_CONTEXT_MENU,
  mouseX,
  mouseY
})
