import React, { ChangeEvent, ReactElement } from 'react';
import { StyledInput } from '../../../styles/shared';

interface InputProps {
  className?: string;
  name: string;
  value: string | number;
  placeholder?: string;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className = 'default-input',
  name,
  value,
  onChange,
  placeholder,
}): ReactElement => {
  return (
    <StyledInput
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
