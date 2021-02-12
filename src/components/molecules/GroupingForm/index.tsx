import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styled from 'styled-components';
import { RootState } from '../../../modules/rootReducer';

const GroupingFrom = () => {
  const { people } = useSelector((state: RootState) => state.people);
  const [groupSize, setGroupSize] = useState('');
  const [memberSize, setMemberSize] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGroupingInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    if (!Number(value)) {
      setErrorMessage('You can only enter numbers');

      if (name === 'groupSize') return setGroupSize('');
      return setMemberSize('');
    }

    if (Number(value) < 1 || 10 < Number(value)) {
      setErrorMessage('Only numbers from 0 to 10 can be entered');
      return;
    }

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
    if (people.length < Number(groupSize) * Number(memberSize)) {
      alert('You have to add more members');
    }
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
        <ErrorMessageBox>
          {errorMessage ? errorMessage : ''}
        </ErrorMessageBox>
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
  border-color: ${({ theme }) => theme.color.red}
`;

const ErrorMessageBox = styled.p`
  color: ${({ theme })=> theme.color.red}
`;
export default GroupingFrom;
