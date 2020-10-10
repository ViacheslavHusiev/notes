import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputSectionFolder from '../foldersLogic/InputSectionFolder'
import FoldersSection from '../foldersLogic/FoldersSection'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5'
  },
  sectionStyle: {
    height: '90%'
  }
}))

const FoldersList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.sectionStyle}>
        <FoldersSection/>
      </div>
      <InputSectionFolder/>
    </div>
  )
}

export default FoldersList
