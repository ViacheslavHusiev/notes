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
  setInputTitle,
  resetInputs,
  editFolder
} from '../redux/actions/folderActions'
import PropTypes from 'prop-types'

const InputSectionFolder = (props) => {
  const { title, open, addFolder, openDialog, closeDialog, setInputTitle, resetInputs } = props

  const clickOpenDialog = () => {
    resetInputs()
    openDialog(open)
  }

  const clickCloseDialog = () => {
    closeDialog(open)
  }

  const addFold = () => {
    if (title.trim()) {
      addFolder({
        title,
        id: 'FOLDER-' + Date.now().toString()
      })
    }
    resetInputs()
    clickCloseDialog()
  }

  const isEnabled = title.length > 0
  return (
    <div>
      <div>
        <Button
          size="large"
          variant='contained'
          startIcon={<AddCircleOutlineIcon/>}
          fullWidth
          onClick={clickOpenDialog}
          style={{ background: 'white' }}
        >
          NEW FOLDER
        </Button>
      </div>
      <Dialog open={open} onClose={clickCloseDialog} aria-labelledby="form-dialog-title">
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
            onChange={e =>
              setInputTitle(e.target.value)
            }
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
  open: PropTypes.bool.isRequired,
  folders: PropTypes.bool.isRequired,
  addFolder: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  setInputTitle: PropTypes.func.isRequired,
  resetInputs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    open: state.foldersReducer.open,
    folders: state.foldersReducer.folders,
    title: state.foldersReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: open => dispatch(openDialog(open)),
    closeDialog: open => dispatch(closeDialog(open)),
    addFolder: title => dispatch(addFolder(title)),
    resetInputs: () => dispatch(resetInputs()),
    setInputTitle: title => dispatch(setInputTitle(title)),
    editFolder: (id, title) => dispatch(editFolder(id, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSectionFolder)
