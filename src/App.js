import React from 'react'
import Header from './components/Header'
import FoldersList from './components/foldersList'
import NotesList from './components/notesList'
import NotesContent from './components/notesContent'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppMobile from './AppMobile'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    background: '#eeeeee',
    minHeight: '520px',
    height: '100vh'
  },
  desk: {
    flex: '1 0 auto',
    display: 'flex'
  }
}))

const App = () => {
  const classes = useStyles()
  const matchesXs = useMediaQuery('(max-width:768px)')
  return (
    <div>
      {matchesXs

        ? <AppMobile/>

        : <div className={classes.root}>
          <Header/>
          <div className={classes.desk}>
            <FoldersList/>
            <NotesList/>
            <NotesContent/>
          </div>
        </div>
      }
    </div>
  )
}

export default App
