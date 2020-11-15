import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  list: {
    width: '100%'
  },
  noteTitleStyle: {
    width: '100%',
    textAlign: 'center'
  },
  dateStyle: {
    width: '100%',
    color: 'gray',
    textAlign: 'center',
    fontSize: 14
  }
}))

const NoteItem = ({
  noteTitle, onItemClicked, selected, shortTime, onDoubleClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="content" aria-label="secondary mailbox folder" direction='row'>
        <ListItem
          button
          selected={selected}
          onClick={onItemClicked}
          onDoubleClick={onDoubleClick}
        >
          <div className={classes.list} direction='row'>
            <ListItemText className={classes.noteTitleStyle} container primary={noteTitle}/>
            <Divider className={classes.list} />
            <Typography className={classes.dateStyle} container>
              {shortTime}
            </Typography>
          </div>
        </ListItem>
      </List>
    </div>
  )
}

NoteItem.propTypes = {
  onItemClicked: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  noteTitle: PropTypes.string.isRequired,
  shortTime: PropTypes.string.isRequired
}

export default NoteItem
