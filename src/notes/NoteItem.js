import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
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
    fontSize: 12
  },
  listItemText: {
    fontSize: 14
  }
}))

const NoteItem = ({
  notes, selectedFolderId, selectedNoteId, setActiveNoteId,
  selectNoteTitleAndDate, selectedNoteContent, disableEditContentMode,
  enableEditContentMode
}) => {
  const classes = useStyles()

  return (
    <div className={classes.notes}>
      {notes.map((note) => {
        const onClick = () => {
          setActiveNoteId(note.id)
          selectNoteTitleAndDate()
          selectedNoteContent()
          disableEditContentMode()
        }

        const onDoubleClick = () => {
          setActiveNoteId(note.id)
          selectNoteTitleAndDate()
          selectedNoteContent()
          enableEditContentMode()
        }

        if (selectedFolderId === note.masterFolder) {
          return (
            <List
              component="content"
              aria-label="secondary mailbox folder"
              direction='row'
            >
              <ListItem
                button
                selected={note.id === selectedNoteId}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
              >
                <div className={classes.list}>
                  <ListItemText
                    className={classes.noteTitleStyle}
                    classes={{
                      primary: classes.listItemText
                    }}
                    container
                    primary={note.title}
                  />
                  <Typography className={classes.dateStyle} container>
                    {`${note.lastEditShortDate}`}
                  </Typography>
                </div>
              </ListItem>
            </List>
          )
        }
      })}
    </div>
  )
}

NoteItem.propTypes = {
  notes: PropTypes.array.isRequired,
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
