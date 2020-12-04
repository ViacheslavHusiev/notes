import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import NoteItem from './NoteItem'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  notes: {
    width: '100%',
    height: '95%'
  },
  selectedFolderText: {
    width: '100%',
    color: 'Black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  selectedFolder: {
    width: '100%'
  }
}))

const NotesSection = ({ selectedFolderTitle }) => {
  const classes = useStyles()

  const selectedFolderTitleHeader = () => {
    if (!!selectedFolderTitle === true) {
      return (
        `${selectedFolderTitle}`
      )
    }
  }

  return (
    <div>
      <div className={classes.selectedFolder}>
        <Typography className={classes.selectedFolderText} >
          <span>{selectedFolderTitleHeader()}</span>
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
