import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { flexColumnCenter } from '../../../styles/mixin';

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

const StyledCard = styled.div`
  ${flexColumnCenter};

  width: 120px;
  height: 80px;
  margin-bottom: 12px;
  margin-right: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow.deep};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.navy};
  color: ${({ theme }) => theme.color.white};
`;

export default Card;
