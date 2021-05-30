import React, { useContext, useState } from 'react'
import { GithubUserContext } from '../../context/GithubUserContext'
import {
  Paper,
  Typography,
} from '@material-ui/core'

const ReposGrid = () => {

  const userData = useContext(GithubUserContext)[0]
  const repos = useState(userData.repos?userData.repos:[])[0]

  return(
  <>
    {repos && repos.map( repo => {
      <Paper key={`${repo.name}-${repo.id}`}>
        <Typography variant='body2' >repo.name</Typography>
      </Paper>
    })}
  </>)
}

export default ReposGrid