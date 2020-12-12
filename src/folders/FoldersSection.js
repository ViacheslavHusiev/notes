import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FolderItem from './FolderItem'
import { connect } from 'react-redux'
import {
  resetInputs,
  setInputFolderTitle,
  openContextMenu,
  closeContextMenu,
  editFolder,
  openEditDialog,
  closeEditDialog,
  deleteFolder,
  selectFolderTitle,
  disableEditContentMode
} from '../redux/actions'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles(() => ({
  emptyFoldersText: {
    paddingTop: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 22
  }
}))

const FoldersSection = ({
  folders, mouseX, mouseY, deleteFolder, openContextMenu, closeContextMenu,
  editFolder, openFolderEditDialog, openEditDialog, closeEditDialog, title,
  setInputFolderTitle, selectFolderTitle, disableEditContentMode, resetInputs
}) => {
  const classes = useStyles()
  // open context menu (edit, delete)
  const menuRightClick = (event) => {
    event.preventDefault()
    openContextMenu(
      mouseX = event.clientX - 2,
      mouseY = event.clientY - 4
    )
  }

  const menuClose = () => {
    closeContextMenu()
  }

  const deleteFold = () => {
    deleteFolder()
    disableEditContentMode()
    closeContextMenu()
  }

  const openEditDialogF = () => {
    closeContextMenu()
    openEditDialog(openFolderEditDialog)
  }

  const closeEditDialogF = () => {
    closeEditDialog(openFolderEditDialog)
    resetInputs()
  }

  const editFold = () => {
    editFolder()
    resetInputs()
    closeEditDialog(openFolderEditDialog)
    selectFolderTitle()
  }

  // if the folder array is empty,
  // it shows the inscription “ no folders”.
  if (folders.length === 0) {
    return (
      <div className={classes.emptyFoldersText}>
        <p>No folders...</p>
      </div>
    )
  }

  const isEnabled = title.length > 0

  const dialogOnChange = e => setInputFolderTitle(e.target.value)

  const anchorPositionFunc = (mouseY !== null && mouseX !== null)
    ? { top: mouseY, left: mouseX }
    : undefined

  return (
    <div>
      <div onContextMenu={menuRightClick}>
        <div>
          {folders.map((folder) => (
            <FolderItem
              key={folder.id}
              item={folder}
            />
          ))}
        </div>
        {/* right click context menu to edit and delete folders */}
        <Menu
          open={mouseY !== null}
          onClose={menuClose}
          anchorReference="anchorPosition"
          anchorPosition={anchorPositionFunc}
        >
          <MenuItem onClick={openEditDialogF}>
            Edit
          </MenuItem>
          <MenuItem onClick={deleteFold}>
            Delete
          </MenuItem>
        </Menu>
      </div>
      {/* dialog window for adding new folder */}
      <Dialog
        open={openFolderEditDialog}
        onClose={closeEditDialogF}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edit folder name
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="New Name"
            type="text"
            value={title}
            onChange={ dialogOnChange }
            inputProps={{
              maxLength: 20
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialogF} color="primary">
            Cancel
          </Button>
          <Button disabled={!isEnabled} onClick={editFold} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

FoldersSection.propTypes = {
  folders: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number,
  openContextMenu: PropTypes.func.isRequired,
  closeContextMenu: PropTypes.func.isRequired,
  editFolder: PropTypes.func.isRequired,
  openFolderEditDialog: PropTypes.bool.isRequired,
  openEditDialog: PropTypes.func.isRequired,
  closeEditDialog: PropTypes.func.isRequired,
  deleteFolder: PropTypes.func.isRequired,
  setInputFolderTitle: PropTypes.func.isRequired,
  selectFolderTitle: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  resetInputs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    folders: state.foldersReducer.folders,
    mouseX: state.foldersReducer.mouseX,
    mouseY: state.foldersReducer.mouseY,
    openFolderEditDialog: state.foldersReducer.openFolderEditDialog,
    title: state.foldersReducer.title
  }
}

const mapDispatchToProps = {
  resetInputs,
  setInputFolderTitle,
  openContextMenu,
  closeContextMenu,
  openEditDialog,
  closeEditDialog,
  editFolder,
  deleteFolder,
  selectFolderTitle,
  disableEditContentMode
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersSection)
