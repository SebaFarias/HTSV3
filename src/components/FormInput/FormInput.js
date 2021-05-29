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

const FormInput = ({  labelData, inputData }) => {

const classes = useStyles()
const { labelTitle, labelText, labelWidth } = labelData
const { register, inputId, inputProps } = inputData

return (
  <FormControl variant="outlined" className={classes.root}>
    <InputLabel title={labelTitle} htmlFor={inputId}>{labelText}</InputLabel>
    <OutlinedInput
      id={inputId}
      inputRef={register?register:{}}
      inputProps={{
        ...inputProps,
      }}
      labelWidth={labelWidth}
    />
  </FormControl>
)
}

export default FormInput