import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AddCommentIcon from '@material-ui/icons/AddComment'
import { connect } from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import NotesIcon from '@material-ui/icons/Notes'
import {
  openNotesDialog,
  closeNotesDialog,
  setInputNoteTitle,
  resetNoteInputs,
  addNote,
  openEditNoteDialog,
  closeEditNoteDialog,
  editNote,
  deleteNote,
  selectNoteTitleAndDate,
  disableEditContentMode,
  enableEditContentMode,
  selectedNoteContent
} from '../redux/actions'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import CheckIcon from '@material-ui/icons/Check'

const useStyles = makeStyles(() => ({
  appBarStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(#f5f5f5, #e0e0e0);',
    minHeight: '50px'
  },
  buttonStyle: {
    background: 'white',
    marginLeft: 5,
    marginRight: 5
  }
}))

const Header = ({
  selectedFolderId, openNotesDialog, closeNotesDialog,
  openNotesDialogState, addNote, notesTitle, setInputNoteTitle,
  resetNoteInputs, selectedNoteId, openNoteEditDialogState,
  openEditNoteDialog, closeEditNoteDialog, editNote,
  deleteNote, selectNoteTitleAndDate, disableEditContentMode,
  selectedNoteContent, enableEditContentMode, editContentModeState
}) => {
  const classes = useStyles()

  const clickOpenDialog = () => {
    openNotesDialog(openNotesDialogState)
  }

  const clickCloseDialog = () => {
    closeNotesDialog(openNotesDialogState)
  }

  const clickOpenEditDialog = () => {
    openEditNoteDialog(openNoteEditDialogState)
  }

  const clickCloseEditDialog = () => {
    closeEditNoteDialog(openNoteEditDialogState)
  }

  const deleteNoteF = () => {
    disableEditContentMode()
    deleteNote()
  }

  const editNoteF = () => {
    editNote()
    closeEditNoteDialog(openNoteEditDialogState)
    selectNoteTitleAndDate()
    resetNoteInputs()
  }

  const editNoteContent = () => {
    selectedNoteContent()
    enableEditContentMode()
  }

  const addNoteF = () => {
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
    if (notesTitle.trim()) {
      addNote({
        title: notesTitle,
        id: 'NOTE-' + Date.now().toString(),
        masterFolder: selectedFolderId,
        lastEditLongDate: getLongDate(),
        lastEditShortDate: getShortDate(),
        content: ''
      })
    }
    resetNoteInputs()
    clickCloseDialog()
  }

  const isEnabledAdd = !!selectedFolderId
  const isEnabledDialogAdd = notesTitle.length > 0
  const isEnabledEditDelete = !!selectedNoteId
  const isEnabledDialogEdit = notesTitle.length > 0
  const onChangeAddNoteDialog = e => setInputNoteTitle(e.target.value)
  const onChangeEditNoteDialog = e => setInputNoteTitle(e.target.value)
  const isEnabledEditNote = !!selectedNoteId && !editContentModeState
  const isEnabledReady = !!selectedNoteId && !!editContentModeState

  return (
    <div className={classes.appBarStyle}>
      <div className={classes.toolbarColor}>
        <Button
          disabled={!isEnabledEditDelete}
          onClick={deleteNoteF}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <DeleteIcon/>
        </Button>
        <Button
          disabled={!isEnabledEditDelete}
          onClick={clickOpenEditDialog}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <EditIcon/>
        </Button>
        <Button
          disabled={!isEnabledAdd}
          onClick={clickOpenDialog}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <AddCommentIcon/>
        </Button>
        <Button
          disabled={!isEnabledEditNote}
          onClick={editNoteContent}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <NotesIcon/>
        </Button>
        <Button
          disabled={!isEnabledReady}
          onClick={disableEditContentMode}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <CheckIcon/>
        </Button>
      </div>
      {/* dialog window for adding new note */}
      <Dialog
        open={openNotesDialogState}
        onClose={clickCloseDialog}
        aria-labelledby="form-note-dialog-title"
      >
        <DialogTitle id="form-note-dialog-title">Note name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="Name"
            type="text"
            value={notesTitle}
            onChange={onChangeAddNoteDialog}
            inputProps={{
              maxLength: 20
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clickCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            disabled={!isEnabledDialogAdd}
            onClick={addNoteF}
            color="primary"
          >
            Create note
          </Button>
        </DialogActions>
      </Dialog>
      {/* dialog window for editing a note */}
      <Dialog
        open={openNoteEditDialogState}
        onClose={clickCloseEditDialog}
        aria-labelledby="form-note-edit-dialog-title"
      >
        <DialogTitle
          id="form-note-edit-dialog-title"
        >
          Edit note name
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="Name"
            type="text"
            value={notesTitle}
            onChange={onChangeEditNoteDialog}
            inputProps={{
              maxLength: 20
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clickCloseEditDialog} color="primary">
            Cancel
          </Button>
          <Button
            disabled={!isEnabledDialogEdit}
            onClick={editNoteF}
            color="primary"
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

Header.propTypes = {
  notesTitle: PropTypes.string.isRequired,
  openNotesDialogState: PropTypes.bool.isRequired,
  addNote: PropTypes.func.isRequired,
  openNotesDialog: PropTypes.func.isRequired,
  closeNotesDialog: PropTypes.func.isRequired,
  resetNoteInputs: PropTypes.func.isRequired,
  setInputNoteTitle: PropTypes.func.isRequired,
  selectedFolderId: PropTypes.string.isRequired,
  selectedNoteId: PropTypes.string.isRequired,
  openEditNoteDialog: PropTypes.func.isRequired,
  closeEditNoteDialog: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  openNoteEditDialogState: PropTypes.bool.isRequired,
  selectNoteTitleAndDate: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  enableEditContentMode: PropTypes.func.isRequired,
  selectedNoteContent: PropTypes.func.isRequired,
  editContentModeState: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedFolderId: state.foldersReducer.selectedFolderId,
    openNotesDialogState: state.foldersReducer.openNotesDialogState,
    notesTitle: state.foldersReducer.notesTitle,
    selectedNoteId: state.foldersReducer.selectedNoteId,
    openNoteEditDialogState: state.foldersReducer.openNoteEditDialogState,
    editContentModeState: state.foldersReducer.editContentModeState
  }
}

const mapDispatchToProps = {
  openNotesDialog,
  closeNotesDialog,
  setInputNoteTitle,
  addNote,
  resetNoteInputs,
  openEditNoteDialog,
  closeEditNoteDialog,
  editNote,
  deleteNote,
  selectNoteTitleAndDate,
  disableEditContentMode,
  enableEditContentMode,
  selectedNoteContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
