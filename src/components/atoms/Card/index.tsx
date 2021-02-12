import React, { ReactElement } from 'react';
import { StyledCard } from '../../../styles/shared';
import { CardProps } from '../../../types';

const Card: React.FC<CardProps> = ({
  className,
  children,
}): ReactElement => {
  return (
    <StyledCard
      className={className}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
