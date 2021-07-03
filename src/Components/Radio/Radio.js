import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Switch = (props) => {
  const { options, handleChange, value } = props;

  if (Array.isArray(options)) return (
    <RadioGroup style={{ flexDirection: 'row' }} value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <FormControlLabel key={index} value={option.value}
          control={
            <Radio />
          }
          label={option.label} />
      ))}
    </RadioGroup>

  );

  return null;
}

export default Switch