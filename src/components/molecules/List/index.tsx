import React, { ReactElement } from 'react';
import styled from 'styled-components';

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
      <Wrapper>
        {data.map((item, index) =>
          <li key={index}>{item}</li>,
        )}
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 16px;
`;

export default List;
