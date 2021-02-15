import React from 'react';
import { render } from '../../setupTests';
import List from '../atoms/List';

describe('<List />', () => {
  const MOCK_TITLE = 'test-title';

  it('should show list title as prop', () => {
    const { getByText } = render(
      <List title={MOCK_TITLE} />,
    );

    expect(getByText(MOCK_TITLE)).toBeInTheDocument();
  });
});
