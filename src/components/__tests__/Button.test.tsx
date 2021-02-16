import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../setupTests';
import Button from '../atoms/Button/index';

describe('<Button />', () => {
  const MOCK_TITLE = 'test-title';

  it('should show button title as prop', () => {
    const { getByText } = render(<Button title={MOCK_TITLE} />);

    expect(getByText(MOCK_TITLE)).toBeInTheDocument();
  });

  it('should be invoked handler each time click event occurs', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button title={MOCK_TITLE} onClick={onClick} />);
    const button = getByText(MOCK_TITLE);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(2);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(4);
  })
});
