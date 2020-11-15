import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NotesSection from '../notes/NotesSection'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    backgroundColor: '#f5f5f5'
  },
  sectionStyle: {
    height: '100%'
  }
}))

const NotesList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.sectionStyle}>
        <NotesSection/>
      </div>
    </div>
  )
}
export default NotesList
