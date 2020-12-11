import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../NoteContent/Content'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    overflow: 'auto',
    flex: '1 0 40%'
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
