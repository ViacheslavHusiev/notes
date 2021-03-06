import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { connect } from 'react-redux'
import {
  disableEditContentMode,
  setInputFolderTitle,
  openEditDialog,
  deleteFolder
} from '../../redux/actions'
import PropTypes from 'prop-types'

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

const HeaderFolderListMobile = ({
  openFolderEditDialog, disableEditContentMode, deleteFolder,
  openEditDialog, setInputFolderTitle, selectedFolderId,
  selectedFolderTitle
}) => {
  const classes = useStyles()

  const deleteFold = () => {
    deleteFolder()
    disableEditContentMode()
  }

  // editDialog in FolderSection.js
  const openEditDialogF = () => {
    setInputFolderTitle(selectedFolderTitle)
    openEditDialog(openFolderEditDialog)
  }

  const isEnabledButton = selectedFolderId
  return (
    <div className={classes.appBarStyle}>
      <div className={classes.toolbarColor}>
        <Button
          disabled={!isEnabledButton}
          onClick={deleteFold}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <DeleteIcon />
        </Button>
        <Button
          disabled={!isEnabledButton}
          onClick={openEditDialogF}
          className={classes.buttonStyle}
          variant='contained'
          size='small'
        >
          <EditIcon/>
        </Button>
      </div>
    </div>
  )
}

HeaderFolderListMobile.propTypes = {
  openFolderEditDialog: PropTypes.bool.isRequired,
  openEditDialog: PropTypes.func.isRequired,
  deleteFolder: PropTypes.func.isRequired,
  setInputFolderTitle: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  selectedFolderId: PropTypes.string,
  selectedFolderTitle: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    openFolderEditDialog: state.foldersReducer.openFolderEditDialog,
    selectedFolderId: state.foldersReducer.selectedFolderId,
    selectedFolderTitle: state.foldersReducer.selectedFolderTitle
  }
}

const mapDispatchToProps = {
  setInputFolderTitle,
  openEditDialog,
  deleteFolder,
  disableEditContentMode
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFolderListMobile)
