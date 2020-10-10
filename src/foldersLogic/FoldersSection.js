import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FolderItem from './FolderItem'
import { connect } from 'react-redux'
import { resetInputs, setInputId, setInputTitle } from '../redux/actions/folderInputActions'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '90%',
    overflow: 'auto'
  },
  emptyFoldersText: {
    paddingTop: '5%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 22
  }
}))

const FoldersSection = (props) => {
  const classes = useStyles()
  const { folders } = props

  const onItemClicked = (item, index) => {
    setInputId(index)
    setInputTitle(item.title)
  }

  if (folders.length === 0) {
    return (
      <div className={classes.emptyFoldersText}>
        <p>There is no folders yet.</p>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      {folders.map((item, index) => {
        if (item) {
          return (
            <FolderItem
              title={item.title}
              // selected={select}
              onItemClicked={() => {
                onItemClicked(item, index)
              }}
            />
          )
        }
        return null
      })}
    </div>
  )
}

FoldersSection.propTypes = {
  folders: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    folders: state.foldersReducer.folders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetInputs: () => dispatch(resetInputs()),
    setInputTitle: () => dispatch(setInputTitle()),
    setInputId: () => dispatch(setInputId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersSection)
