import React from 'react'
import {
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root:{
    margin: theme.spacing(4),
  }
}))

const GoBtn = () => {

const classes = useStyles()

return (
  <Button 
    variant="contained" 
    title='sumbmitBtn' 
    color='primary'
    className={classes.root}
  >
    Ir
  </Button>
)
}

export default GoBtn