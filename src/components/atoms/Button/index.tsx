import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  className?: string;
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  title,
  onClick,
}): ReactElement => {
  console.log(className);
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 48px;
  margin-top: 8px;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    transform: translate(-0.1rem, -0.1rem);
    cursor: pointer;
  }
`;

export default Button;
