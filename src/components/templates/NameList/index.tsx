import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Person } from '../../../types';
import { deletePerson } from '../../../modules/people';
import Card from '../../../components/atoms/Card';
import Button from '../../../components/atoms/Button';

interface NameListProps {
  data: Person[];
}

const NameList: React.FC<NameListProps> = ({
  data,
}): ReactElement => {
  const dispatch = useDispatch();

  const handleDeleteButton = async (id: string) => {
    dispatch(deletePerson(id));
  };

  return (
    <Wrapper>
      <h2>Lunch people</h2>
      <ListWrapper>
        {data.map(person =>
          <Card
            key={person._id}
            className='name-card'
          >
            {person.name}
            <Button
              className='delete-button'
              title='삭제'
              onClick={() => handleDeleteButton(person._id)}
            />
          </Card>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 16px;
`;

export default NameList;
