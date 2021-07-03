import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const InputField = (props) => {
  const { options, handleChange, value, ...rest } = props

  return (
    <TextField
      fullWidth
      value={value}
      variant='outlined'
      onChange={handleChange}
      {...rest}
    >
      {Array.isArray(options) ? options.map((option, index) => {

        return (
          <MenuItem key={index} value={option.value || option.id}>
            {option.label}
          </MenuItem>
        )
      }) : null}
    </TextField>
  );
}

export default InputField;