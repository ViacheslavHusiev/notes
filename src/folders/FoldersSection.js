import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FolderItem from './FolderItem'
import { connect } from 'react-redux'
import {
  resetInputs,
  setInputFolderTitle,
  setActiveFolderId,
  openContextMenu,
  closeContextMenu,
  editFolder,
  openEditDialog,
  closeEditDialog,
  deleteFolder,
  selectFolderTitle,
  resetActiveNoteId, disableEditContentMode,
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
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  emptyFoldersText: {
    paddingTop: '5%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 22
  }
}))

const FoldersSection = ({
  folders, setActiveFolderId, selectedFolderId, mouseX, deleteFolder,
  mouseY, openContextMenu, closeContextMenu, editFolder,
  openFolderEditDialog, openEditDialog, closeEditDialog, title, setInputFolderTitle,
  selectFolderTitle, resetActiveNoteId, disableEditContentMode }) => {

  const classes = useStyles()
  // открывает контекстное меню (edit, delete) при нажатии ПКМ
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
  // если массив папок пуст, выводит надпись
  if (folders.length === 0) {
    return (
      <div className={classes.emptyFoldersText}>
        <p>There is no folders yet.</p>
      </div>
    )
  }

  const isEnabled = title.length > 0

  return (
    <div className={classes.root}>
      <div onContextMenu={menuRightClick} >
        {folders.map((folder) =>
          <FolderItem
            key = {folder.id}
            title={folder.title}
            selected={folder.id === selectedFolderId}
            onItemClicked={() => {
              resetActiveNoteId()
              setActiveFolderId(folder.id)
              selectFolderTitle()
              disableEditContentMode()
            }}
            onContextMenu = {() => {
              setActiveFolderId(folder.id)
              setInputFolderTitle(folder.title)
              selectFolderTitle()
              disableEditContentMode()
            }}
          />
        )}
        <Menu
          open={mouseY !== null}
          onClose={menuClose}
          anchorReference="anchorPosition"
          anchorPosition={
            mouseY !== null && mouseX !== null
              ? { top: mouseY, left: mouseX }
              : undefined
          }>
          <MenuItem onClick={openEditDialogF}>Edit</MenuItem>
          <MenuItem onClick={deleteFold}>Delete</MenuItem>
        </Menu>
      </div>
      <Dialog open={openFolderEditDialog} onClose={closeEditDialogF} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit folder name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name='title'
            label="New Name"
            type="text"
            value={title}
            onChange={e =>
              setInputFolderTitle(e.target.value)
            }
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
  folders: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setActiveFolderId: PropTypes.func.isRequired,
  selectedFolderId: PropTypes.string.isRequired,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number,
  openContextMenu: PropTypes.func.isRequired,
  closeContextMenu: PropTypes.func.isRequired,
  editFolder: PropTypes.func.isRequired,
  openFolderEditDialog: PropTypes.bool.isRequired,
  openEditDialog: PropTypes.func.isRequired,
  closeEditDialog: PropTypes.func.isRequired,
  setInputFolderTitle: PropTypes.func.isRequired,
  deleteFolder: PropTypes.func.isRequired,
  selectFolderTitle: PropTypes.func.isRequired,
  resetActiveNoteId: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    folders: state.foldersReducer.folders,
    selectedFolderId: state.foldersReducer.selectedFolderId,
    mouseX: state.foldersReducer.mouseX,
    mouseY: state.foldersReducer.mouseY,
    openFolderEditDialog: state.foldersReducer.openFolderEditDialog,
    title: state.foldersReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetInputs: () => dispatch(resetInputs()),
    setInputFolderTitle: (title) => dispatch(setInputFolderTitle(title)),
    setActiveFolderId: (id) => dispatch(setActiveFolderId(id)),
    openContextMenu: (mouseY, mouseX) => dispatch(openContextMenu(mouseY, mouseX)),
    closeContextMenu: () => dispatch(closeContextMenu()),
    openEditDialog: openFolderEditDialog => dispatch(openEditDialog(openFolderEditDialog)),
    closeEditDialog: openFolderEditDialog => dispatch(closeEditDialog(openFolderEditDialog)),
    editFolder: () => dispatch(editFolder()),
    deleteFolder: () => dispatch(deleteFolder()),
    selectFolderTitle: () => dispatch(selectFolderTitle()),
    resetActiveNoteId: () => dispatch(resetActiveNoteId()),
    disableEditContentMode: () => dispatch(disableEditContentMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersSection)
