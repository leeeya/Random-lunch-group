import React, { ReactElement } from 'react';
import Card from '../../atoms/Card';
import List from '../../atoms/List';
import { GroupListProps } from '../../../types';
import { TITLE, NAME } from '../../../constants';

const GroupList: React.FC<GroupListProps> = ({
  data,
}): ReactElement => {
  const { people, randomGroupList } = data;

  return (
    <List title={TITLE.LUNCH_GROUPS}>
      {randomGroupList.map((group, index) =>
        <Card
          key={index}
          className={NAME.GROUP_CARD}
        >
          <div className='name-wrapper'>
            {group.map(personKey =>
              <p key={personKey}>
                {people[personKey].name}
              </p>,
            )}
          </div>
        </Card>,
      )}
    </List>
  );
};

export default GroupList;
