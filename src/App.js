import React from 'react'
import Header from './components/Header'
import FoldersList from './components/foldersList'
import NotesList from './components/notesList'
import NotesContent from './components/notesContent'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    background: '#eeeeee',
    '@media (max-width: 768px)': { // eslint-disable-line no-useless-computed-key
      minWidth: '320px',
      minHeight: '520px'
    }
  },
  desk: {
    height: '94vh',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 0
  }
}))

const App = () => {
  const classes = useStyles()
  const matchesXs = useMediaQuery('(max-width:768px)')
  console.log(matchesXs)
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.desk}>
        <FoldersList/>
        <NotesList/>
        <NotesContent/>
      </div>
    </div>
  )
}

export default App
