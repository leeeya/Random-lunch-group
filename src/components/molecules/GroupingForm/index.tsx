import React, { ChangeEvent, useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styled from 'styled-components';

const GroupingFrom = () => {
  const [groupSize, setGroupSize] = useState('');
  const [memberSize, setMemberSize] = useState('');

  const handleGroupingInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    switch (name) {
      case 'groupSize':
        setGroupSize(value);
        break;
      case 'memberSize':
        setMemberSize(value);
        break;
      default: alert('not exisit name');
        break;
    }
  };

  const handleSubmitButton = () => {
    console.log('success submit');
  };

  return (
    <Wrapper>
      <Label>✨Number of Group
        <Input
          className='group-size-input'
          value={groupSize}
          name='groupSize'
          onChange={handleGroupingInput}
        />
      </Label>
      <Label>✨Minimum member size
        <Input
          className='minimum-member-size-input'
          value={memberSize}
          name='memberSize'
          onChange={handleGroupingInput}
        />
      </Label>
        <Button
          className='submit-button'
          title='그룹만들기'
          onClick={handleSubmitButton}
        />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  border-color: ${({ theme }) => theme.color.navy}
`;
export default GroupingFrom;
