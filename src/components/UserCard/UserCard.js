import React, { useContext } from 'react'
import { GithubUserContext } from '../../context/GithubUserContext'
import {
  Card,
  CardMedia,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    minHeight: '50vh',
  },
  avatar: {
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
  }
}))

const UserCard = () => {

  const classes = useStyles()
  const userData = useContext(GithubUserContext)[0]

  return(
    <Card className={classes.root}>
      <CardMedia
        image = 'https://avatars.githubusercontent.com/u/53194639?v=4'
        className = {classes.avatar}
      />
    </Card>    
  )

}
export default UserCard