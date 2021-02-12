import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { deletePerson } from '../../../modules/people';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import List from '../../../components/atoms/List';
import { Wrapper } from '../../../styles/shared';
import { NameListProps } from '../../../types';
import { TITLE, NAME } from '../../../constants';

const NameList: React.FC<NameListProps> = ({
  data,
}): ReactElement => {
  const dispatch = useDispatch();

  const handleDeleteButton = async (id: string) => {
    dispatch(deletePerson(id));
  };

  return (
    <Wrapper>
      <List title={TITLE.LUNCH_PEOPLE}>
        {data.map(person =>
          <Card
            key={person._id}
            className={NAME.NAME_CARD}
          >
            {person.name}
            <Button
              className={NAME.DELETE_BUTTON}
              title={TITLE.DELETE}
              onClick={() => handleDeleteButton(person._id)}
            />
          </Card>,
        )}
      </List>
    </Wrapper>
  );
};

export default NameList;
