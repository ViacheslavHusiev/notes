import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import NoteItem from './NoteItem'
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

const NotesSection = ({ selectedFolderTitle }) => {
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
        <NoteItem />
      </div>
    </div>
  )
}

NotesSection.propTypes = {
  selectedFolderTitle: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedFolderTitle: state.foldersReducer.selectedFolderTitle
  }
}

export default connect(mapStateToProps, null)(NotesSection)
