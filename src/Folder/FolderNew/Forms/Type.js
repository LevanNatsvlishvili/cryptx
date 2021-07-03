import React from "react";
import Radio from 'Components/Radio';

const Type = (props) => {
  const { branch, setBranch } = props;

  const handleChange = (e) => {
    setBranch({ ...branch, type: e.target.value });
  };
  return (
    <Radio
      value={branch.type}
      options={options}
      handleChange={handleChange}
    />
  );
}

const options = [
  { value: 'file', label: 'File' },
  { value: 'folder', label: 'Folder' },
]

export default Type;