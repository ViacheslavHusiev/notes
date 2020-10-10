import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}))

const FolderItem = (title, onItemClicked, selected) => {
  const classes = useStyles()

  return (
    <ListItem
      className={classes.root}
      button
      role='button'
      onClick={onItemClicked}
      selected={selected}
    >
      <ListItemText primary={title}/>
    </ListItem>
  )
}

export default FolderItem
