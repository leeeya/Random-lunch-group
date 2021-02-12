import React, { ChangeEvent, ReactElement } from 'react';
import styled from 'styled-components';

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

const StyledInput = styled.input`
  width: 70%;
`;

export default Input;
