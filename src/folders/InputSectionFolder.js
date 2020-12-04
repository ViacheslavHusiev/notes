import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { connect } from 'react-redux'
import {
  openDialog,
  closeDialog,
  addFolder,
  setInputFolderTitle,
  resetInputs,
  editFolder
} from '../redux/actions'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  inputSection: {
    paddingBottom: 10
  },
  button: {
    background: 'white',
    fontSize: 14
  }
}))

const InputSectionFolder = ({
  title, openFolderDialog, addFolder, openDialog, closeDialog,
  setInputFolderTitle, resetInputs
}) => {
  const classes = useStyles()

  const clickOpenDialog = () => {
    resetInputs()
    openDialog(openFolderDialog)
  }

  const clickCloseDialog = () => {
    closeDialog(openFolderDialog)
  }
  //переп
  const addFold = () => {
    if (title.trim()) {
      addFolder({
        title: title,
        id: 'FOLDER-' + Date.now().toString()
      })
    }
    resetInputs()
    clickCloseDialog()
  }

  const dialogOnChange = e => setInputFolderTitle(e.target.value)

  const isEnabled = title.length > 0
  return (
    <div className={classes.inputSection}>
      <div>
        <Button
          className={classes.button}
          size="large"
          variant='contained'
          startIcon={<AddCircleOutlineIcon/>}
          fullWidth
          onClick={clickOpenDialog}
        >
          NEW FOLDER
        </Button>
      </div>
      {/* dialog window for editing a folder */}
      <Dialog
        open={openFolderDialog}
        onClose={clickCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Folder name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="Name"
            type="text"
            value={title}
            onChange={dialogOnChange}
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
          <Button disabled={!isEnabled} onClick={addFold} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

InputSectionFolder.propTypes = {
  title: PropTypes.string.isRequired,
  openFolderDialog: PropTypes.bool.isRequired,
  folders: PropTypes.array.isRequired,
  addFolder: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  resetInputs: PropTypes.func.isRequired,
  setInputFolderTitle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    openFolderDialog: state.foldersReducer.openFolderDialog,
    folders: state.foldersReducer.folders,
    title: state.foldersReducer.title
  }
}

const mapDispatchToProps = {
  openDialog,
  closeDialog,
  addFolder,
  resetInputs,
  setInputFolderTitle,
  editFolder
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSectionFolder)
