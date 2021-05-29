import React from 'react'
import Search from '../search/Search'
import GoBtn from '../goBtn/GoBtn'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    margin: 'auto',
  },
}))

const SearchForm =() => {

  const classes = useStyles()

  const Submit= event => {
    event.preventDefault()
    console.log('submitting')
  }

  return (
    <Grid 
      onSubmit={Submit}
      component='form' 
      title='SearchForm' 
      justify="center"
      alignItems="center"
      className={classes.root}
      spacing={2}
      container 
    >
      <Grid 
        xs={12} 
        justify="center"
        alignItems="center"
        item 
        container
      >
        <Search/>
      </Grid>
      <Grid 
        xs={12} 
        justify="center"
        alignItems="center"
        item 
        container
      >
        <GoBtn/>
      </Grid>
    </Grid>
  )
}

export default SearchForm