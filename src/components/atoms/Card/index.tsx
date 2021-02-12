import React, { ReactElement } from 'react';
import { StyledCard } from '../../../styles/shared';

interface CardProps {
  className: string;
  children: any;
}

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
