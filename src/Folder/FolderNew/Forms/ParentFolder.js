import React from "react";
import TextField from 'Components/TextField';

const ParentFolder = (props) => {
  const { options, setParent, value } = props;

  const handleChange = (e) => {
    setParent(e.target.value)
  }

  return (
    <TextField
      select
      label='Parent Folder'
      value={value}
      options={options}
      onChange={handleChange}
    />
  );
}

export default ParentFolder;