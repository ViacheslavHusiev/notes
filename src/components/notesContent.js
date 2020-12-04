import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../NoteContent/Content'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    display: 'flex',
    height: '94vh',
    overflow: 'auto'
  }
}))

const NotesContent = () => {
  const classes = useStyles()

  return (
    <div className='col-xs-4'>
      <div className={classes.root}>
        <Content/>
      </div>
    </div>
  )
}
export default NotesContent
