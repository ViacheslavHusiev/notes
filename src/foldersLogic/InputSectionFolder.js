import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { connect } from 'react-redux'
import { openDialog, closeDialog, addFolder } from '../redux/actions/folderActions'
import { setInputTitle, resetInputs } from '../redux/actions/folderInputActions'

const InputSectionFolder = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, id, open } = props
  // eslint-disable-next-line react/prop-types
  const { addFolder, editFolder, deleteFolder, openDialog, closeDialog, setInputTitle, resetInputs } = props

  const handleClickOpen = () => {
    openDialog(open)
  }

  const handleClickClose = () => {
    closeDialog(open)
  }

  const addFold = () => {
    if (title.trim()) {
      addFolder({
        title,
        id: Date.now().toString()
      })
      resetInputs()
    }
    handleClickClose()
  }

  const editFold = () => {
    if (title) {
      editFolder(id, {
        title
      })
    }
    resetInputs()
    handleClickClose()
  }

  const deleteFold = () => {
    deleteFolder(id)
    resetInputs()
  }

  const isEnabled = title.length > 0
  console.log({ open })
  return (
    <div>
      <div>
        <Button
          size="large"
          variant='contained'
          startIcon={<AddCircleOutlineIcon/>}
          fullWidth
          onClick={handleClickOpen}
          style={{ background: 'white' }}
        >
          NEW FOLDER
        </Button>
        {/* {id !== -1 && */}
        {/* <Button */}
        {/*  onClick={deleteFolder} */}
        {/*  size="large" */}
        {/*  variant='contained' */}
        {/*  fullWidth */}
        {/*  style={{ background: '#f27573' }} */}
        {/* > */}
        {/*  DELETE FOLDER */}
        {/* </Button> */}
        {/* } */}
      </div>
      <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
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
          <Button onClick={handleClickClose} color="primary">
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

const mapStateToProps = (state) => {
  return {
    open: state.openDialogReducer.open,
    folders: state.foldersReducer.folders,
    title: state.foldersInputReducer.title,
    id: state.foldersInputReducer.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: open => dispatch(openDialog(open)),
    closeDialog: open => dispatch(closeDialog(open)),
    addFolder: title => dispatch(addFolder(title)),
    resetInputs: () => dispatch(resetInputs()),
    setInputTitle: title => dispatch(setInputTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSectionFolder)
