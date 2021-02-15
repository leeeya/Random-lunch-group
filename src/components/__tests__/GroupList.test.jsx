import React from 'react';
import { render } from '../../setupTests';
import GroupList from '../molecules/GroupList';

describe(`<GroupList />`, () => {
  const MOCK_DATA = {
    people: [{ id: '1', name: 'ABC' }, { id: '2', name: 'DEF' },  { id: '3', name: 'GHI' }, { id : '4', name: 'JKL' }],
    randomGroupList: [[1, 0], [3, 2]],
  };

  it('shows GroupList title', () => {
    const { getByText } = render(<GroupList data={MOCK_DATA} />);

    expect(getByText('🍚Lunch Groups!🍚')).toBeInTheDocument();
  });

  it('renders group list data as prop ', () => {
    const { getByText } = render(<GroupList data={MOCK_DATA} />);
    expect(getByText(MOCK_DATA.people[0].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.people[1].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.people[2].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.people[3].name)).toBeInTheDocument();
  });
});
