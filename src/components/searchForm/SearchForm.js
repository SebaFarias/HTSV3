import React, { useContext } from 'react'
import FormInput from '../FormInput/FormInput'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import { GithubUserContext } from '../../context/GithubUserContext'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    margin: 'auto',
    padding: theme.spacing(2),
  },
}))

const SearchForm =() => {

  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const gitHubFunctions = useContext(GithubUserContext)[1]
  const Submit= dataForm => {
    const user = dataForm.user
    gitHubFunctions.fetchUser(user)
  }

  return (
    <Paper className={classes.root}>  
      <Grid 
        onSubmit={handleSubmit(Submit)}
        component='form' 
        title='SearchForm' 
        justify="center"
        alignItems="center"
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
          <Typography variant='h6'>Buscador Usuario de GitHub</Typography>
        </Grid>
        <Grid 
          xs={12} 
          justify="center"
          alignItems="center"
          item 
          container
        >
          <FormInput
            inputData={{ 
              inputId:'userInput',
              inputProps:{
                ...register('user'),
              }
            }}
            labelData={{
              labelWidth: 130,
              labelText: 'Usuario de Github',
            }}
          />
        </Grid>
        <Grid 
          xs={12} 
          justify="center"
          alignItems="center"
          item 
          container
          >
          <SubmitBtn label="Ir"/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SearchForm