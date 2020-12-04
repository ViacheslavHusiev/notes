import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NotesSection from '../notes/NotesSection'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    height: '94vh',
    marginLeft: 2,
    marginRight: 2,
    overflow: 'auto'
  }
}))

const NotesList = () => {
  const classes = useStyles()

  return (
    <div className='col-xs-4'>
      <div className={classes.root}>
        <NotesSection/>
      </div>
    </div>
  )
}
export default NotesList
