import React from 'react';
import { render } from '../../setupTests';
import Button from '../atoms/Button/index';

describe('<Button />', () => {
  const MOCK_TITLE = 'test-title';
  const MOCK_CLASS_NAME = 'test-className';
  const onClick = jest.fn();

  it('should show button title as prop', () => {
    const  { getByText } = render(<Button title={MOCK_TITLE} />);

    expect(getByText(MOCK_TITLE)).toBeInTheDocument();
  });
});
