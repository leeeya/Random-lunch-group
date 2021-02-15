import React from 'react';
import { render } from '../../setupTests';
import Input from '../atoms/Input';

describe('<Input />', () => {
  const MOCK_PLACEHOLDER = 'test-placeholder';

  it('renders input box', () => {
    const { container, getByPlaceholderText } = render(
      <Input placeholder={MOCK_PLACEHOLDER} />,
    );

    const input = container.querySelector('input');
    expect(getByPlaceholderText(MOCK_PLACEHOLDER)).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
