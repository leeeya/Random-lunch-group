import React, { ReactElement } from 'react';
import { StyledInput } from '../../../styles/shared';
import { InputProps } from '../../../types';

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}): ReactElement => {
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
