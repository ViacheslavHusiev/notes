import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AddCommentIcon from '@material-ui/icons/AddComment'

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  buttonColor: {
    background: 'white'
  },
  toolbarColor: {
    background: 'linear-gradient(#f5f5f5, #e0e0e0);',
    height: '100%'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbarColor}>
        <Grid item xs={false} sm={3}/>

        <Grid item container xs={false} sm={4}>
          <div className={classes.buttonStyles}>
            <Button className={classes.buttonColor} variant='contained' startIcon={<DeleteIcon/>}>Delete</Button>
            <Button className={classes.buttonColor} variant='contained' startIcon={<EditIcon/>}>Edit</Button>
            <Button className={classes.buttonColor} variant='contained' startIcon={<AddCommentIcon/>}>Add</Button>
          </div>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

export default Header
