import React, { ReactElement } from 'react';
import { StyledButton, ButtonWrapper } from '../../../styles/shared';
import { ButtonProps } from '../../../types';

const Button: React.FC<ButtonProps> = ({
  className,
  title,
  onClick,
}): ReactElement => {
  return (
    <ButtonWrapper>
      <StyledButton
        className={className}
        onClick={onClick}
      >
        {title}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
