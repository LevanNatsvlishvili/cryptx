import React from "react";
import TextField from 'Components/TextField';

const Name = (props) => {
  const { branch, setBranch } = props;

  const handleChange = (e) => {
    setBranch({ ...branch, label: e.target.value })
  }

  return (
    <TextField
      value={branch.label}
      onChange={handleChange}
      label='Name' />
  );
}

export default Name;