import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {
  disableEditContentMode,
  enableEditContentMode,
  selectedNoteContent,
  selectNoteTitleAndDate,
  setActiveNoteId
} from '../redux/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
  noteTitleStyle: {
    textAlign: 'flex-start'
  },
  dateStyle: {
    width: '100%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 12,
    '@media (max-width: 768px)': {
      fontSize: 24
    }
  },
  listItemText: {
    fontSize: 14,
    '@media (max-width: 768px)': {
      fontSize: 24
    }
  }
}))

const NoteItem = ({ item, selectedFolderId, selectedNoteId, setActiveNoteId,
  selectNoteTitleAndDate, selectedNoteContent, disableEditContentMode,
  enableEditContentMode
}) => {
  const classes = useStyles()

  const onClick = () => {
    setActiveNoteId(item.id)
    selectNoteTitleAndDate()
    selectedNoteContent()
    disableEditContentMode()
  }

  const onDoubleClick = () => {
    setActiveNoteId(item.id)
    selectNoteTitleAndDate()
    selectedNoteContent()
    enableEditContentMode()
  }

  if (selectedFolderId === item.masterFolder) {
    return (
      <List
        component="content"
        aria-label="secondary mailbox folder"
        direction='row'
      >
        <ListItem
          button
          selected={item.id === selectedNoteId}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
        >
          <div className={classes.list}>
            <ListItemText
              className={classes.noteTitleStyle}
              classes={{
                primary: classes.listItemText
              }}
              primary={item.title}
            />
            <Typography className={classes.dateStyle}>
              {`${item.lastEditShortDate}`}
            </Typography>
          </div>
        </ListItem>
      </List>
    )
  }
  return null
}

NoteItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedFolderId: PropTypes.string.isRequired,
  selectedNoteId: PropTypes.string.isRequired,
  selectedNoteContent: PropTypes.func.isRequired,
  setActiveNoteId: PropTypes.func.isRequired,
  selectNoteTitleAndDate: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  enableEditContentMode: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedFolderTitle: state.foldersReducer.selectedFolderTitle,
    notes: state.foldersReducer.notes,
    selectedNoteId: state.foldersReducer.selectedNoteId,
    selectedFolderId: state.foldersReducer.selectedFolderId
  }
}

const mapDispatchToProps = {
  setActiveNoteId,
  selectNoteTitleAndDate,
  enableEditContentMode,
  disableEditContentMode,
  selectedNoteContent
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
