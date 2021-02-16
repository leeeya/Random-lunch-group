import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../setupTests';
import NameInputForm from '../molecules/NameInputForm';

describe(`<NameInputForm />`, () => {
  it('shows NameInputForm title', () => {
    const { getByText } = render(<NameInputForm />);

    expect(getByText('Add Person!😋')).toBeInTheDocument();
  });

  it('should work input', () => {
    const MOCK_NAME = 'test-name';
    const { container } = render(<NameInputForm />);
    const nameInput = container.querySelectorAll('input')[0];

    fireEvent.change(nameInput, { target: { value: MOCK_NAME } });
    expect(nameInput.value).toBe(MOCK_NAME);
  });
});
