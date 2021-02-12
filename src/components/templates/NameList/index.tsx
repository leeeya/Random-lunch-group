import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Person } from '../../../types';
import { deletePerson } from '../../../modules/people';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import List from '../../../components/molecules/List';
import { Wrapper } from '../../../styles/shared';

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
      <List title='Lunch People'>
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
          </Card>,
        )}
      </List>
    </Wrapper>
  );
};

export default NameList;
