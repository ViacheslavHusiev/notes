import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FoldersListMobile from './foldersListMobile'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NotesListMobile from './notesListMobile'
import NotesContentMobile from './notesContentMobile'

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
  }
}))

const AppMobile = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path='/' component={FoldersListMobile}/>
          <Route exact path='/notesListMobile' component={NotesListMobile}/>
          <Route exact path='/notesContentMobile' component={NotesContentMobile}/>
        </Switch>
      </Router>
    </div>
  )
}

export default AppMobile
