import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

interface ButtonProps {
  className?: string;
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className = 'default-button',
  title,
  onClick,
}): ReactElement => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      theme={theme}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  .default-button {
    width: 100%;
    margin: 5px;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.color.orange};
    box-shadow: ${({ theme }) => theme.boxShadow};
    outline: none;
    user-select: none;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.black};
    transition: all 0.2s;

    &:hover {
      box-shadow: 0.5rem 0.5rem 0 black;
      transform: translate(-0.5rem, -0.5rem);
      cursor: pointer;
    }
    &:active {
      box-shadow: 0 0 0 black;
      transform: translate(0, 0);
    }
  }
`;

export default Button;
