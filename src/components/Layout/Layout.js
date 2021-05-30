import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ( theme => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  }
}))


const Layout = ({ children }) => {

  const classes = useStyles()

  return (
    <Paper component='main' className={classes.root}>
      {children}
    </Paper>
  )
}

export default Layout