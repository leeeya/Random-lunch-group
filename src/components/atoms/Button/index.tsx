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
  width: 70%;
  margin-top: 8px;
  border: 1px solid white;
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 300ms ease-in;
  &:hover {
    transform: translate(2px, -2px);
    cursor: pointer;
  }
`;

export default Button;
