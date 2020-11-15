import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
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
import {
  openNotesDialog,
  closeNotesDialog,
  setInputNoteTitle,
  resetNoteInputs,
  addNote,
  openEditNoteDialog,
  closeEditNoteDialog,
  editNote, deleteNote,
} from '../redux/actions'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  buttonColor: {
    background: 'white'
  },
  toolbarColor: {
    background: 'linear-gradient(#f5f5f5, #e0e0e0);',
    height: '7vh'
  }
}))

const Header = ({
  selectedFolderId, openNotesDialog, closeNotesDialog,
  openNotesDialogState, addNote, notesTitle, setInputNoteTitle,
  resetNoteInputs, selectedNoteId, openNoteEditDialogState,
  openEditNoteDialog, closeEditNoteDialog, editNote,
  deleteNote}) => {
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

  const defeteNoteF = () => {
    deleteNote()
  }

  const editNoteF = () => {
    editNote()
    closeEditNoteDialog(openNoteEditDialogState)
    resetNoteInputs()
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

  const isEnabledAdd = Boolean(selectedFolderId)
  const isEnabledDialogAdd = notesTitle.length > 0
  const isEnabledEditDelete = Boolean(selectedNoteId)
  const isEnabledDialogEdit = notesTitle.length > 0
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbarColor}>
        <Grid item xs={false} sm={3}/>

        <Grid item container xs={false} sm={4}>
          <div className={classes.buttonStyles}>
            <Button disabled={!isEnabledEditDelete} onClick={defeteNoteF} className={classes.buttonColor} variant='contained' startIcon={<DeleteIcon/>}>Delete</Button>
            <Button disabled={!isEnabledEditDelete} onClick={clickOpenEditDialog} className={classes.buttonColor} variant='contained' startIcon={<EditIcon/>}>Edit</Button>
            <Button disabled={!isEnabledAdd} onClick={clickOpenDialog} className={classes.buttonColor} variant='contained' startIcon={<AddCommentIcon/>}>Add</Button>
          </div>
        </Grid>

      </Toolbar>
      <Dialog open={openNotesDialogState} onClose={clickCloseDialog} aria-labelledby="form-note-dialog-title">
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
            onChange={e =>
              setInputNoteTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clickCloseDialog} color="primary">
            Cancel
          </Button>
          <Button disabled={!isEnabledDialogAdd} onClick={addNoteF} color="primary">
            Create note
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openNoteEditDialogState} onClose={clickCloseEditDialog} aria-labelledby="form-note-edit-dialog-title">
        <DialogTitle id="form-note-edit-dialog-title">Edit note name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="Name"
            type="text"
            value={notesTitle}
            onChange={e =>
              setInputNoteTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clickCloseEditDialog} color="primary">
            Cancel
          </Button>
          <Button disabled={!isEnabledDialogEdit} onClick={editNoteF} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  )
}

Header.propTypes = {
  notesTitle: PropTypes.string.isRequired,
  openNotesDialogState: PropTypes.bool.isRequired,
  notes: PropTypes.bool.isRequired,
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
  openNoteEditDialogState: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedFolderId: state.foldersReducer.selectedFolderId,
    openNotesDialogState: state.foldersReducer.openNotesDialogState,
    notesTitle: state.foldersReducer.notesTitle,
    selectedNoteId: state.foldersReducer.selectedNoteId,
    openNoteEditDialogState: state.foldersReducer.openNoteEditDialogState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNotesDialog: (openNotesDialogState) => dispatch(openNotesDialog(openNotesDialogState)),
    closeNotesDialog: (openNotesDialogState) => dispatch(closeNotesDialog(openNotesDialogState)),
    setInputNoteTitle: (notesTitle) => dispatch(setInputNoteTitle(notesTitle)),
    addNote: (notesTitle) => dispatch(addNote(notesTitle)),
    resetNoteInputs: () => dispatch(resetNoteInputs()),
    openEditNoteDialog: (openNoteEditDialogState) => dispatch(openEditNoteDialog(openNoteEditDialogState)),
    closeEditNoteDialog: (openNoteEditDialogState) => dispatch(closeEditNoteDialog(openNoteEditDialogState)),
    editNote: () => dispatch(editNote()),
    deleteNote: () => dispatch(deleteNote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
