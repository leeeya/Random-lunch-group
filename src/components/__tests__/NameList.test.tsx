import React from 'react';
import { render } from '../../setupTests';
import NameList from '../molecules/NameList';

describe(`<NameList />`, () => {
  const MOCK_DATA = [{ _id: '1', name: 'ABC' }, { _id: '2', name: 'DEF' }, { _id: '3', name: 'GHI' }, { _id: '4', name: 'JKL' }];

  it('renders name list data as prop ', () => {
    const { getByText } = render(<NameList data={MOCK_DATA} />);

    expect(getByText(MOCK_DATA[0].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA[1].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA[2].name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA[3].name)).toBeInTheDocument();
  });
});
