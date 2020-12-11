import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NotesSection from '../notes/NotesSection'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    marginLeft: 2,
    marginRight: 2,
    overflow: 'auto',
    flex: '1 0 auto',
    maxWidth: '300px'
  }
}))

const NotesList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NotesSection/>
    </div>
  )
}
export default NotesList
