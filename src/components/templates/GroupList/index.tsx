import React, { ReactElement } from 'react';
import Card from '../../atoms/Card';
import List from '../../molecules/List';
import { Person } from '../../../types';

interface GroupListProps {
  data: {people: Person[], randomGroupList: number[][]};
}

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
