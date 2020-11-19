import {
  ADD_FOLDER,
  CLOSE_FOLDER_CONTEXT_MENU,
  CLOSE_FOLDER_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER,
  OPEN_FOLDER_CONTEXT_MENU,
  OPEN_FOLDER_TITLE_DIALOG,
  OPEN_EDIT_FOLDER_TITLE_DIALOG,
  CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  RESET_FOLDER_INPUT,
  SET_ACTIVE_FOLDER_ID,
  SET_INPUT_FOLDER_TITLE,
  SELECTED_FOLDER_TITLE,
  ADD_NOTE,
  OPEN_NOTES_TITLE_DIALOG,
  CLOSE_NOTES_TITLE_DIALOG,
  SET_INPUT_NOTE_TITLE,
  RESET_NOTE_INPUT,
  SET_ACTIVE_NOTE_ID,
  RESET_ACTIVE_NOTE_ID,
  EDIT_NOTE,
  DELETE_NOTE,
  OPEN_EDIT_NOTE_TITLE_DIALOG,
  CLOSE_EDIT_NOTE_TITLE_DIALOG,
  DISABLE_EDIT_CONTENT_MODE,
  ENABLE_EDIT_CONTENT_MODE,
  SELECTED_NOTE_TITLE_AND_DATE,
  SET_INPUT_NOTE_CONTENT,
  SELECTED_NOTE_CONTENT
} from './actionTypes'

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
export const setInputFolderTitle = title => ({
  type: SET_INPUT_FOLDER_TITLE,
  title
})
export const setActiveFolderId = selectedFolderId => ({
  type: SET_ACTIVE_FOLDER_ID,
  selectedFolderId
})
export const resetInputs = () => ({
  type: RESET_FOLDER_INPUT
})
// change state to true to open dialog responsible for title of added folder
export const openDialog = openFolderDialog => ({
  type: OPEN_FOLDER_TITLE_DIALOG,
  openFolderDialog
})
// change state to false to open dialog responsible for title of added folder
export const closeDialog = openFolderDialog => ({
  type: CLOSE_FOLDER_TITLE_DIALOG,
  openFolderDialog
})
// change state to true to open dialog responsible for title of edited folder
export const openEditDialog = openFolderEditDialog => ({
  type: OPEN_EDIT_FOLDER_TITLE_DIALOG,
  openFolderEditDialog
})
// change state to false to open dialog responsible for title of edited folder
export const closeEditDialog = openFolderEditDialog => ({
  type: CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  openFolderEditDialog
})
// specifies coordinates and open right click menu
export const openContextMenu = (mouseX, mouseY) => ({
  type: OPEN_FOLDER_CONTEXT_MENU,
  mouseX,
  mouseY
})
// reset coordinates and close right click menu
export const closeContextMenu = (mouseX, mouseY) => ({
  type: CLOSE_FOLDER_CONTEXT_MENU,
  mouseX,
  mouseY
})
export const selectFolderTitle = () => ({
  type: SELECTED_FOLDER_TITLE
})
export const addNote = (note) => ({
  type: ADD_NOTE,
  note
})
// change state to true to open dialog responsible for title of added note
export const openNotesDialog = openNotesDialogState => ({
  type: OPEN_NOTES_TITLE_DIALOG,
  openNotesDialogState
})
// change state to false to open dialog responsible for title of added note
export const closeNotesDialog = openNotesDialogState => ({
  type: CLOSE_NOTES_TITLE_DIALOG,
  openNotesDialogState
})
export const setInputNoteTitle = (notesTitle) => ({
  type: SET_INPUT_NOTE_TITLE,
  notesTitle
})
export const resetNoteInputs = () => ({
  type: RESET_NOTE_INPUT
})
export const setActiveNoteId = (selectedNoteId) => ({
  type: SET_ACTIVE_NOTE_ID,
  selectedNoteId
})
export const resetActiveNoteId = () => ({
  type: RESET_ACTIVE_NOTE_ID
})
export const editNote = () => ({
  type: EDIT_NOTE
})
export const deleteNote = () => ({
  type: DELETE_NOTE
})
// change state to true to open dialog responsible for title of edited note
export const openEditNoteDialog = openNoteEditDialogState => ({
  type: OPEN_EDIT_NOTE_TITLE_DIALOG,
  openNoteEditDialogState
})
// change state to false to open dialog responsible for title of edited note
export const closeEditNoteDialog = openNoteEditDialogState => ({
  type: CLOSE_EDIT_NOTE_TITLE_DIALOG,
  openNoteEditDialogState
})
// required to show the React Quill component to edit the note
export const enableEditContentMode = (editContentModeState) => ({
  type: ENABLE_EDIT_CONTENT_MODE,
  editContentModeState
})
export const disableEditContentMode = (editContentModeState) => ({
  type: DISABLE_EDIT_CONTENT_MODE,
  editContentModeState
})
export const selectNoteTitleAndDate = () => ({
  type: SELECTED_NOTE_TITLE_AND_DATE
})
export const setInputNoteContent = (content) => ({
  type: SET_INPUT_NOTE_CONTENT,
  content
})
export const selectedNoteContent = () => ({
  type: SELECTED_NOTE_CONTENT
})
