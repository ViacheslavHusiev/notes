import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import {
  disableEditContentMode,
  resetActiveNoteId,
  selectFolderTitle,
  setActiveFolderId,
  setInputFolderTitle
} from '../redux/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
  listItem: {
    width: '100%',
    fontSize: 14
  },
  listItemText: {
    '@media (max-width: 768px)': {
      marginLeft: 15,
      fontSize: 30
    }
  }
}))

const FolderItem = ({
  setActiveFolderId, selectedFolderId, resetActiveNoteId,
  disableEditContentMode, setInputFolderTitle, selectFolderTitle,
  folders
}) => {
  const classes = useStyles()

  return (
    <div>
      {folders.map((folder) => {
        const onClick = () => {
          resetActiveNoteId()
          setActiveFolderId(folder.id)
          selectFolderTitle()
          disableEditContentMode()
        }
        const onContextClick = () => {
          setActiveFolderId(folder.id)
          setInputFolderTitle(folder.title)
          selectFolderTitle()
          disableEditContentMode()
        }
        return (
          <ListItem
            key={folder.id}
            className={classes.listItem}
            button
            role='button'
            onClick={onClick}
            selected={folder.id === selectedFolderId}
            onContextMenu={onContextClick}
          >
            <ListItemText classes={{
              primary: classes.listItemText
            }} primary={folder.title}/>
          </ListItem>
        )
      })}
    </div>
  )
}

FolderItem.propTypes = {
  folders: PropTypes.array.isRequired,
  setInputFolderTitle: PropTypes.func.isRequired,
  selectFolderTitle: PropTypes.func.isRequired,
  resetActiveNoteId: PropTypes.func.isRequired,
  setActiveFolderId: PropTypes.func.isRequired,
  selectedFolderId: PropTypes.string.isRequired,
  disableEditContentMode: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    folders: state.foldersReducer.folders,
    selectedFolderId: state.foldersReducer.selectedFolderId
  }
}

const mapDispatchToProps = {
  setInputFolderTitle,
  setActiveFolderId,
  selectFolderTitle,
  resetActiveNoteId,
  disableEditContentMode
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderItem)
