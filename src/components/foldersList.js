import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputSectionFolder from '../folders/InputSectionFolder'
import FoldersSection from '../folders/FoldersSection'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    height: '94vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  },
  folderSection: {
    overflow: 'auto',
    flex: '1 0 auto'
  }
}))

const FoldersList = () => {
  const classes = useStyles()

  return (
    <div className='col-xs-4'>
      <div className={classes.root}>
        <div className={classes.folderSection}>
          <FoldersSection/>
        </div>
        <InputSectionFolder/>
      </div>
    </div>
  )
}

export default FoldersList
