import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../NoteContent/Content'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '90vh',
    backgroundColor: '#f5f5f5'
  }
}))

const NotesContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Content/>
    </div>
  )
}
export default NotesContent
