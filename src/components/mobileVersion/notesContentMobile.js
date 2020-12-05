import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../../NoteContent/Content'
import HeaderNotesContentMobile from './HeaderNotesContentMobile'

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

const NotesContentMobile = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeaderNotesContentMobile/>
      <Content/>
    </div>
  )
}
export default NotesContentMobile
