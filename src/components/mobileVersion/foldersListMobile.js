import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FoldersSectionMobile from '../../folders/mobileVersion/FolderSectionMobile'
import InputSectionFolder from '../../folders/InputSectionFolder'
import HeaderFolderListMobile from './HeaderFolderListMobile'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    flex: '1 0 auto'
  },
  folderSection: {
    overflow: 'auto',
    flex: '1 0 auto'
  }
}))

const FoldersListMobile = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.folderSection}>
        <HeaderFolderListMobile/>
        <FoldersSectionMobile/>
      </div>
      <InputSectionFolder/>
    </div>
  )
}

export default FoldersListMobile
