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
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    overflow: 'auto',
    flex: '1 0 40%'
  },
  selectedNoteText: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60px',
    whiteSpace: 'wrap',
    justifyContent: 'center'
  },
  selectedNoteTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '5px',
    marginRight: '5px'
  },
  selectedNoteDate: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 14
  },
  quill: {
    toolbar: 'position: fixed;',
    wordWrap: 'break-word',
    height: 'calc(100vh - 160px)'
  },
  selectedNoteContent: {
    marginLeft: '10px',
    wordWrap: 'break-word',
    maxHeight: 'calc(100vh - 160px)'
  }
}))

const Content = ({
  selectedNoteTitle, selectedNoteDate, content, setInputNoteContent,
  editContentModeState, selectedNoteId
}) => {
  const classes = useStyles()

  const selectedNoteTitleHeader = () => {
    if (selectedNoteTitle) {
      return (
        <div className={classes.selectedNoteText}>
          <Typography className={classes.selectedNoteDate}>
            {selectedNoteDate}
          </Typography>
          <Typography className={classes.selectedNoteTitle}>
            {selectedNoteTitle}
          </Typography>
        </div>
      )
    }
  }

  if (selectedNoteId) {
    return (
      <div className={classes.root}>
        {selectedNoteTitleHeader()}
        {editContentModeState
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
  }
  return null
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
  selectedNoteTitle: PropTypes.string.isRequired,
  selectedNoteDate: PropTypes.string.isRequired,
  setInputNoteContent: PropTypes.func.isRequired,
  editContentModeState: PropTypes.bool.isRequired,
  selectedNoteId: PropTypes.string.isRequired
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
