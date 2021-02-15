import React from 'react';
import { render } from '../../setupTests';
import Card from '../atoms/Card';

describe(`<Card />`, () => {
  it('shows the props correctly', () => {
    const MOCK_CARD_NAME = 'test_card_name';
    const MOCK_CLASS_NAME = 'test_class_name';

    const { getByText } = render(
      <Card className={MOCK_CLASS_NAME}>
        {MOCK_CARD_NAME}
      </Card>
      );

    expect(getByText(MOCK_CARD_NAME)).toBeInTheDocument();
  });
});
