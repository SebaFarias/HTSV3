import React from 'react'
import {
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root:{
    margin: 'auto',
    
  }
}))

const SubmitBtn = () => {

const classes = useStyles()

return (
  <Button 
    variant="contained" 
    title='sumbmitBtn' 
    color='primary'
    className={classes.root}
    type='submit'
  >
    Ir
  </Button>
)
}

export default SubmitBtn