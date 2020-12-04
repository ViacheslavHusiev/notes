import { combineReducers } from 'redux'
import {
  ADD_FOLDER,
  ADD_NOTE,
  CLOSE_EDIT_FOLDER_TITLE_DIALOG,
  CLOSE_FOLDER_CONTEXT_MENU,
  CLOSE_FOLDER_TITLE_DIALOG,
  CLOSE_NOTES_TITLE_DIALOG,
  DELETE_FOLDER,
  EDIT_FOLDER,
  EDIT_NOTE,
  OPEN_FOLDER_CONTEXT_MENU,
  OPEN_FOLDER_TITLE_DIALOG,
  OPEN_EDIT_FOLDER_TITLE_DIALOG,
  OPEN_NOTES_TITLE_DIALOG,
  RESET_ACTIVE_NOTE_ID,
  RESET_FOLDER_INPUT,
  RESET_NOTE_INPUT,
  SELECTED_FOLDER_TITLE,
  SET_ACTIVE_FOLDER_ID,
  SET_ACTIVE_NOTE_ID,
  SET_INPUT_FOLDER_TITLE,
  SET_INPUT_NOTE_TITLE,
  OPEN_EDIT_NOTE_TITLE_DIALOG,
  CLOSE_EDIT_NOTE_TITLE_DIALOG,
  DELETE_NOTE,
  ENABLE_EDIT_CONTENT_MODE,
  DISABLE_EDIT_CONTENT_MODE,
  SELECTED_NOTE_TITLE_AND_DATE,
  SET_INPUT_NOTE_CONTENT,
  SELECTED_NOTE_CONTENT
} from './actionTypes'
import dayjs from 'dayjs'

const initialFoldersState = {
  folders: [],
  notes: [],
  openFolderDialog: false,
  openFolderEditDialog: false,
  openNotesDialogState: false,
  openNoteEditDialogState: false,
  editContentModeState: false,
  title: '',
  notesTitle: '',
  selectedFolderId: '',
  //
  selectedFolderTitle: '',
  selectedNoteId: '',
  //
  selectedNoteTitle: '',
  selectedNoteDate: '',
  mouseX: null,
  mouseY: null,
  content: ''
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
      const notes = []
      // переписать со splice
      state.notes.forEach((note) => {
        if (state.selectedFolderId !== note.masterFolder) {
          notes.push(note)
        }
      })
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
        folders,
        notes,
        selectedFolderId: '',
        selectedFolderTitle: '',
        selectedNoteId: '',
        title: ''
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
      return { ...state, openFolderDialog: true }
    }
    case CLOSE_FOLDER_TITLE_DIALOG: {
      return { ...state, openFolderDialog: false }
    }
    case OPEN_EDIT_FOLDER_TITLE_DIALOG: {
      return { ...state, openFolderEditDialog: true }
    }
    case CLOSE_EDIT_FOLDER_TITLE_DIALOG: {
      return { ...state, openFolderEditDialog: false, title: '' }
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
    case SET_INPUT_FOLDER_TITLE: {
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
    case RESET_FOLDER_INPUT: {
      return {
        ...state,
        title: ''
      }
    }
    case SELECTED_FOLDER_TITLE: {
      const folders = [...state.folders]
      const selectedFolderId = state.selectedFolderId
      const selectedFolderIndex = folders.findIndex(
        folder => folder.id === selectedFolderId
      )
      return {
        ...state,
        selectedFolderTitle: folders[selectedFolderIndex].title
      }
    }
    case ADD_NOTE: {
      const notes = [...state.notes]
      notes.push(action.note)
      return {
        ...state,
        notes
      }
    }
    case OPEN_NOTES_TITLE_DIALOG: {
      return { ...state, openNotesDialogState: true }
    }
    case CLOSE_NOTES_TITLE_DIALOG: {
      return { ...state, openNotesDialogState: false }
    }
    case SET_INPUT_NOTE_TITLE: {
      const { notesTitle } = action
      return {
        ...state,
        notesTitle
      }
    }
    case RESET_NOTE_INPUT: {
      return {
        ...state,
        notesTitle: ''
      }
    }
    case SET_ACTIVE_NOTE_ID: {
      const { selectedNoteId } = action
      return {
        ...state,
        selectedNoteId
      }
    }
    case RESET_ACTIVE_NOTE_ID: {
      return {
        ...state,
        selectedNoteId: ''
      }
    }
    case DELETE_NOTE: {
      const notes = []
      state.notes.map((note) => {
        if (state.selectedNoteId !== note.id) {
          notes.push(note)
        }
      })
      return {
        ...state,
        notes,
        selectedNoteId: ''
      }
    }
    case EDIT_NOTE: {
      const getLongDate = jsdate => {
        const date = dayjs(jsdate)
        const formatString = ('D MMMM YYYY [at] H:mm A')
        return date.format(formatString)
      }
      const getShortDate = jsdate => {
        const date = dayjs(jsdate)
        const formatString = ('D.M.YYYY H:mm A')
        return date.format(formatString)
      }

      const notes = [...state.notes]
      const selectedNoteId = state.selectedNoteId
      const selectedNoteIndex = notes.findIndex(
        note => note.id === selectedNoteId
      )
      notes[selectedNoteIndex].title = state.notesTitle
      notes[selectedNoteIndex].lastEditLongDate = getLongDate()
      notes[selectedNoteIndex].lastEditShortDate = getShortDate()
      return {
        ...state,
        notes
      }
    }
    case OPEN_EDIT_NOTE_TITLE_DIALOG: {
      const notes = [...state.notes]
      const selectedNoteId = state.selectedNoteId
      const selectedNoteIndex = notes.findIndex(
        note => note.id === selectedNoteId
      )
      state.notesTitle = notes[selectedNoteIndex].title
      return { ...state, openNoteEditDialogState: true }
    }
    case CLOSE_EDIT_NOTE_TITLE_DIALOG: {
      return { ...state, openNoteEditDialogState: false }
    }
    case ENABLE_EDIT_CONTENT_MODE: {
      return { ...state, editContentModeState: true }
    }
    case DISABLE_EDIT_CONTENT_MODE: {
      return { ...state, editContentModeState: false }
    }
    case SELECTED_NOTE_TITLE_AND_DATE: {
      const notes = [...state.notes]
      const selectedNoteId = state.selectedNoteId
      const selectedNoteIndex = notes.findIndex(
        note => note.id === selectedNoteId
      )
      return {
        ...state,
        selectedNoteTitle: notes[selectedNoteIndex].title,
        selectedNoteDate: notes[selectedNoteIndex].lastEditLongDate
      }
    }
    case SET_INPUT_NOTE_CONTENT: {
      const getLongDate = jsdate => {
        const date = dayjs(jsdate)
        const formatString = ('D MMMM YYYY [at] H:mm A')
        return date.format(formatString)
      }
      const getShortDate = jsdate => {
        const date = dayjs(jsdate)
        const formatString = ('D.M.YYYY H:mm A')
        return date.format(formatString)
      }
      const { content } = action
      const notes = [...state.notes]
      const selectedNoteId = state.selectedNoteId
      const selectedNoteIndex = notes.findIndex(
        note => note.id === selectedNoteId
      )
      notes[selectedNoteIndex].content = content
      notes[selectedNoteIndex].lastEditLongDate = getLongDate()
      notes[selectedNoteIndex].lastEditShortDate = getShortDate()
      return {
        ...state,
        content
      }
    }
    case SELECTED_NOTE_CONTENT: {
      const notes = [...state.notes]
      const selectedNoteId = state.selectedNoteId
      const selectedNoteIndex = notes.findIndex(
        note => note.id === selectedNoteId
      )
      return {
        ...state,
        content: notes[selectedNoteIndex].content
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
