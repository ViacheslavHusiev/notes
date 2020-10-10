import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import FoldersList from './components/foldersList'
import NotesList from './components/notesList'
import NotesContent from './components/notesContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  desk: {
    background: '#eeeeee',
    height: '93vh',
    marginTop: 2
  },
  header: {
    height: '7vh'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <Grid container direction='column'>
      <Grid className={classes.header} item>
        <Header/>
      </Grid>
      <Grid spacing={1} className={classes.desk} item container direction='row'>
        <Grid item xs={4} lg={2}>
          <FoldersList/>
        </Grid>

        <Grid item xs={3} lg={3}>
          <NotesList/>
        </Grid>

        <Grid item xs={5} lg={7}>
          <NotesContent/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
