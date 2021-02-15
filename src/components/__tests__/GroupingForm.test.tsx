import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../setupTests';
import GroupingForm from '../molecules/GroupingForm';

describe(`<GroupingForm />`, () => {
  it('shows GroupingForm title', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<GroupingForm onSubmit={onSubmit} />);

    expect(getByText('Grouping')).toBeInTheDocument();
  });

  it('should work input and button corretly', () => {
    const onSubmit = jest.fn();
    const { container, getByText } = render(<GroupingForm onSubmit={onSubmit} />);
    const makeButton = getByText('Make Group!');

    const groupSizeInput = container.querySelectorAll('input')[0];
    const minMemberSizeInput = container.querySelectorAll('input')[1];

    fireEvent.change(groupSizeInput, { target: { value: 0 } });
    fireEvent.change(minMemberSizeInput, { target: { value: 0 } });

    fireEvent.click(makeButton);

    expect(onSubmit).toBeCalledTimes(0);
  });
});
