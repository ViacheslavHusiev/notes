import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputSectionFolder from '../folders/InputSectionFolder'
import FoldersSection from '../folders/FoldersSection'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '90vh',
    backgroundColor: '#f5f5f5'
  },
  sectionStyle: {
    height: '82vh'
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
