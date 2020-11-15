import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import NoteItem from './NoteItem'
import {
  enableEditContentMode,
  selectNoteTitleAndDate,
  setActiveNoteId,
  disableEditContentMode, selectedNoteContent,
} from '../redux/actions'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  notes: {
    width: '100%',
    height: '95%',
    overflow: 'auto'
  },
  selectedFolderText: {
    width: '100%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 18
  },
  selectedFolder: {
    width: '100%',
    height: '5%',
    overflow: 'auto',
    whiteSpace: 'nowrap'
  }
}))

const NotesSection = ({
  selectedFolderTitle, notes, selectedNoteId, selectedFolderId,
  setActiveNoteId, selectNoteTitleAndDate, enableEditContentMode,
  disableEditContentMode, selectedNoteContent }) => {
  const classes = useStyles()

  const selectedFolderTitleHeader = () => {
    if (Boolean(selectedFolderTitle) === true) {
      return (
        `Folder: ${selectedFolderTitle}`
      )
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.selectedFolder}>
        <Typography className={classes.selectedFolderText} >
          {selectedFolderTitleHeader()}
        </Typography>
      </div>
      <div className={classes.notes}>
        {notes.map((note) => {
          if (selectedFolderId === note.masterFolder) {
            return (
              <NoteItem
                key={note.id}
                noteTitle={note.title}
                shortTime={`Last change: ${note.lastEditShortDate}`}
                selected={note.id === selectedNoteId}
                onItemClicked={() => {
                  setActiveNoteId(note.id)
                  selectNoteTitleAndDate()
                  selectedNoteContent()
                  disableEditContentMode()
                }}
                onDoubleClick = {() => {
                  setActiveNoteId(note.id)
                  selectNoteTitleAndDate()
                  selectedNoteContent()
                  enableEditContentMode()
                }}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

NotesSection.propTypes = {
  notes: PropTypes.object.isRequired,
  selectedFolderTitle: PropTypes.string.isRequired,
  selectedNoteId: PropTypes.string.isRequired,
  selectedFolderId: PropTypes.string.isRequired,
  setActiveNoteId: PropTypes.func.isRequired,
  selectNoteTitleAndDate: PropTypes.func.isRequired,
  enableEditContentMode: PropTypes.func.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  selectedNoteContent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedFolderTitle: state.foldersReducer.selectedFolderTitle,
    notes: state.foldersReducer.notes,
    selectedNoteId: state.foldersReducer.selectedNoteId,
    selectedFolderId: state.foldersReducer.selectedFolderId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveNoteId: (id) => dispatch(setActiveNoteId(id)),
    selectNoteTitleAndDate: () => dispatch(selectNoteTitleAndDate()),
    enableEditContentMode: () => dispatch(enableEditContentMode()),
    disableEditContentMode: () => dispatch(disableEditContentMode()),
    selectedNoteContent: () => dispatch(selectedNoteContent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesSection)
