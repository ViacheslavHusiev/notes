import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import NotesIcon from '@material-ui/icons/Notes'
import {
  disableEditContentMode,
  enableEditContentMode,
  selectedNoteContent
} from '../../redux/actions'
import PropTypes from 'prop-types'
import CheckIcon from '@material-ui/icons/Check'

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

const HeaderNotesContentMobile = ({
  selectedNoteId, disableEditContentMode, selectedNoteContent,
  enableEditContentMode, editContentModeState
}) => {
  const classes = useStyles()

  const editNoteContent = () => {
    selectedNoteContent()
    enableEditContentMode()
  }

  const isEnabledEdit = !!selectedNoteId && !editContentModeState
  const isEnabledReady = !!selectedNoteId && !!editContentModeState

  return (
    <div className={classes.appBarStyle}>
      <div className={classes.toolbarColor}>
        <Button
          disabled={!isEnabledEdit}
          onClick={editNoteContent}
          className={classes.buttonStyle}
          variant='contained'
          startIcon={<NotesIcon/>}
          size='small'
        />
        <Button
          disabled={!isEnabledReady}
          onClick={disableEditContentMode}
          className={classes.buttonStyle}
          variant='contained'
          startIcon={<CheckIcon/>}
          size='small'
        />
      </div>
    </div>
  )
}

HeaderNotesContentMobile.propTypes = {
  selectedNoteId: PropTypes.string.isRequired,
  disableEditContentMode: PropTypes.func.isRequired,
  enableEditContentMode: PropTypes.func.isRequired,
  selectedNoteContent: PropTypes.func.isRequired,
  editContentModeState: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedNoteId: state.foldersReducer.selectedNoteId,
    editContentModeState: state.foldersReducer.editContentModeState
  }
}

const mapDispatchToProps = {
  disableEditContentMode,
  enableEditContentMode,
  selectedNoteContent
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNotesContentMobile)
