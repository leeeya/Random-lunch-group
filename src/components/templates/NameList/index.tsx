import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePerson } from '../../../modules/people';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import List from '../../../components/atoms/List';
import { ListWrapper } from '../../../styles/shared';
import { NameListProps } from '../../../types';
import { TITLE, NAME, PATH, MESSAGE } from '../../../constants';

const NameList: React.FC<NameListProps> = ({
  data,
}): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteButton = async (id: string) => {
    if (history.location.pathname === PATH.RESULT) return alert(MESSAGE.CAN_NOT_DELETE);

    dispatch(deletePerson(id));
  };

  return (
    <ListWrapper>
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
    </ListWrapper>
  );
};

export default React.memo(NameList);
