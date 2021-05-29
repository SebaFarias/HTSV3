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

const SubmitBtn = ({ label, title='sumbmitBtn' }) => {

const classes = useStyles()

return (
  <Button 
    variant="contained" 
    title={title} 
    color='primary'
    className={classes.root}
    type='submit'
  >
    {label}
  </Button>
)
}

export default SubmitBtn