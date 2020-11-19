import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {
  setInputNoteContent
} from '../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '85%'
  },
  selectedNoteText: {
    width: '100%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    overflow: 'auto',
    height: '5%',
    whiteSpace: 'nowrap'
  },
  quill: {
    height: '100%',
    toolbar: 'position: fixed'
  },
  selectedNoteContent: {
    height: '85vh',
    overflow: 'auto'
  }
}))

const Content = ({
  selectedNoteTitle, selectedNoteDate, content, setInputNoteContent,
  editContentModeState, selectedNoteId
}) => {
  const classes = useStyles()

  const selectedNoteTitleHeader = () => {
    if (Boolean(selectedNoteTitle) === true) {
      return (
        `Note: ${selectedNoteTitle} (${selectedNoteDate})`
      )
    }
  }
  if (Boolean(selectedNoteId) === true) {
    return (
      <div className={classes.root}>
        <Typography className={classes.selectedNoteText}>
          {selectedNoteTitleHeader()}
        </Typography>
        {editContentModeState === true
          ? <ReactQuill
            className={classes.quill}
            theme='snow'
            value={content}
            placeholder="Note content..."
            onChange={setInputNoteContent}
          />
          : <div
            className={classes.selectedNoteContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        }
      </div>
    )
  } else {
    return (
      <div/>
    )
  }
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
  selectedNoteTitle: PropTypes.string.isRequired,
  selectedNoteDate: PropTypes.string.isRequired,
  setInputNoteContent: PropTypes.func.isRequired,
  editContentModeState: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedNoteTitle: state.foldersReducer.selectedNoteTitle,
    selectedNoteDate: state.foldersReducer.selectedNoteDate,
    content: state.foldersReducer.content,
    editContentModeState: state.foldersReducer.editContentModeState,
    selectedNoteId: state.foldersReducer.selectedNoteId
  }
}

const mapDispatchToProps = {
  setInputNoteContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
