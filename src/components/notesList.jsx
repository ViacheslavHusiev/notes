import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5'
  },
  buttonColor: {
    background: 'white'
  }
}))

const NotesList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="content">

      </List>
    </div>
  )
}
export default NotesList
