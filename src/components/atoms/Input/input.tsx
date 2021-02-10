import React from 'react';
import styled from 'styled-components';

interface InputProps {
  className?: string;
}

const Input = ({
  className = 'default-input',
}: InputProps) => {
  return (
    <StyledInput className={className} />
  );
};

const StyledInput = styled.input`
  .default-input {
    width: 100%;
  }
`;

export default Input;
