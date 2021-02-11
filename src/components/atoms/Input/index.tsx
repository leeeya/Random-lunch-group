import React, { ChangeEvent, ReactElement } from 'react';
import styled from 'styled-components';

interface InputProps {
  className?: string;
  value: string;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className = 'default-input',
  value,
  onChange,
}) :ReactElement => {
  return (
    <StyledInput
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  .default-input {
    width: 100%;
  }
`;

export default Input;
