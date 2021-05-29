import React from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root:{
    margin: 'auto',
  }
}))

const Search = ({ register }) => {

const classes = useStyles()

return (
  <FormControl variant="outlined" className={classes.root}>
    <InputLabel htmlFor="github-user">Usuario de Github</InputLabel>
    <OutlinedInput
      id="github-user"
      inputProps={{...register("user"),title:'UserInput',}}
      labelWidth={130}
    />
  </FormControl>
)
}

export default Search