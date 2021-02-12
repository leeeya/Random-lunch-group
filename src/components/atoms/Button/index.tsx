import React, { ReactElement } from 'react';
import { StyledButton } from '../../../styles/shared';
import { ButtonProps } from '../../../types';

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

export default Button;
