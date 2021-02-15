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
    <>
      <h1>{TITLE.LUNCH_GROUPS}</h1>
      <List>
        {randomGroupList.map((group, index) =>
          <Card
            key={index}
            className={NAME.GROUP_CARD}
          >
            {group.map(personKey =>
              <Card
                key={personKey}
                className={NAME.GROUPED_NAME_CARD}
              >
                {people[personKey].name}
              </Card>,
            )}
          </Card>,
        )}
      </List>
    </>
  );
};

export default GroupList;
