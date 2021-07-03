import React from "react";
import TextField from 'Components/TextField';

const FileExtension = (props) => {
  const { branch, setBranch } = props;

  const handleChange = (e) => {
    setBranch({ ...branch, extension: e.target.value })
  }

  return (
    <TextField
      select
      label='File Extension'
      value={branch.extension}
      options={options}
      onChange={handleChange}
    />
  );
}

const options = [
  { value: 'pdf', label: 'Pdf' },
  { value: 'docx', label: 'Docx' },
  { value: 'xlsx', label: 'XLSX' },
  { value: 'png', label: 'PNG' },
  { value: 'txt', label: 'txt' },
]

export default FileExtension;