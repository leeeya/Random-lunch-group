import React, { ReactElement } from 'react';
import { StyledUl } from '../../../styles/shared';

interface ListProps {
  title: string;
  data?: [];
  children?: any;
}

const List: React.FC<ListProps> = ({
  title,
  data = [],
  children,
}): ReactElement => {
  return (
    <>
      <h2>{title}</h2>
      <StyledUl>
        {data.map((item, index) =>
          <li key={index}>{item}</li>,
        )}
        {children}
      </StyledUl>
    </>
  );
};

export default List;
