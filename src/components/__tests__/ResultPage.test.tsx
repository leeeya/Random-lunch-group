import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../setupTests';
import ResultPage from '../../pages/ResultPage';

describe(`<ResultPage />`, () => {
  it('should work input and button corretly', () => {
    const MOCK_DATA = {
      minMemberSize: 2,
      groupSize: 2,
      peopleSize: 4
    };
    const onClick = jest.fn();

    const { getByText } = render(
      <ResultPage
        data={MOCK_DATA}
        onClick={onClick}
      />
    );
    const againButton = getByText('Again!');

    fireEvent.click(againButton);
    fireEvent.click(againButton);
    fireEvent.click(againButton);

    expect(onClick).toBeCalledTimes(3);
  });
});
