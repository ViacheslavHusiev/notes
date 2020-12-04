import React from 'react'
import Header from './components/Header'
import FoldersList from './components/foldersList'
import NotesList from './components/notesList'
import NotesContent from './components/notesContent'
import { makeStyles } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    background: '#eeeeee',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: '320px'
    }
  },
  desk: {
    height: '94vh',
    margin: 0,
    padding: 0
  },
  container: {
    margin: 0,
    padding: 0
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header/>
      <div className={`${classes.container} container-fluid`}>
        <div className={classes.desk}>
          <div className='row row-no-gutters'>
            <FoldersList/>
            <NotesList/>
            <NotesContent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
