import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}))

const FolderItem = ({ title, onItemClicked, selected, onContextMenu }) => {
  const classes = useStyles()
  let formattedTitle = title

  // если больше 20-ти символов обрезать и прибавить три точки
  if (title.length > 20) {
    formattedTitle = title.slice(0, 20) + '...'
  }

  return (
    <ListItem
      className={classes.root}
      button
      role='button'
      onClick={onItemClicked}
      selected={selected}
      onContextMenu={onContextMenu}
    >
      <ListItemText primary={formattedTitle}/>
    </ListItem>
  )
}

FolderItem.propTypes = {
  onItemClicked: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onContextMenu: PropTypes.func.isRequired
}

export default FolderItem
