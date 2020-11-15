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
    height: '5%',
    overflow: 'auto',
    whiteSpace: 'nowrap'
  },
  quill: {
    height: '100%',
    toolbar: 'position: fixed'
  }
}))

const Content = ({
  selectedNoteTitle, selectedNoteDate, content, setInputNoteContent,
  editContentModeState }) => {
  const classes = useStyles()

  const selectedNoteTitleHeader = () => {
    if (Boolean(selectedNoteTitle) === true) {
      return (
        `Note: ${selectedNoteTitle} (${selectedNoteDate})`
      )
    }
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.selectedNoteText} >
        {selectedNoteTitleHeader()}
      </Typography>
      {editContentModeState === true ? <ReactQuill
        className={classes.quill}
        theme='snow'
        value={content}
        placeholder="Note content..."
        onChange={e => setInputNoteContent(e.target.value)}
      />
        : <Typography className={classes.selectedNoteText} >
          {content}
        </Typography>
      }
    </div>
  )
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
    editContentModeState: state.foldersReducer.editContentModeState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInputNoteContent: (content) => dispatch(setInputNoteContent(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
