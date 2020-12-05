import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NotesSection from '../../notes/NotesSection'
import HeaderNotesListMobile from './HeaderNotesListMobile'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    flex: '1 0 auto'
  }
}))

const NotesListMobile = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderNotesListMobile/>
      <NotesSection/>
    </div>
  )
}
export default NotesListMobile
