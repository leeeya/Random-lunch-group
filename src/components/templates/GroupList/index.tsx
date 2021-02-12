import React, { ReactElement } from 'react';
import Card from '../../atoms/Card';
import List from '../../atoms/List';
import { GroupListProps } from '../../../types';

const GroupList: React.FC<GroupListProps> = ({
  data
}) : ReactElement => {
  const { people, randomGroupList } = data;

  return (
    <List title='Lunch Groups!'>
      {randomGroupList.map((group, index) =>
        <Card
          key={index}
          className='group-card'>
          {group.map(personKey =>
            <p key={personKey}>
            {people[personKey].name}
            </p>,
          )}
        </Card>,
      )}
    </List>
  );
};

export default GroupList;
