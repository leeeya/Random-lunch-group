import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../../modules/rootReducer';
import { setGroupingInputValues, setRandomGroupList } from '../../../modules/people';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { getRandomGroupList } from '../../../utils/getRandomGroupList';
import { Wrapper, Label, ErrorMessageBox } from '../../../styles/shared';

const GroupingFrom: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { people } = useSelector((state: RootState) => state.people);
  const [groupSize, setGroupSize] = useState(0);
  const [minMemberSize, setMinMemberSize] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGroupingInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    const valueToNumber = Number(value);

    if (!valueToNumber) {
      setErrorMessage('You can only enter numbers');

      if (name === 'groupSize') return setGroupSize(0);
      return setMinMemberSize(0);
    }
    if (valueToNumber < 1 || 10 < valueToNumber) return setErrorMessage('Only numbers from 0 to 10 can be entered');

    switch (name) {
      case 'groupSize':
        setGroupSize(valueToNumber);
        break;
      case 'minMemberSize':
        setMinMemberSize(valueToNumber);
        break;
      default: alert('not exisit name');
        break;
    }
  };

  const handleSubmitButton = () => {
    if (people.length < groupSize * minMemberSize) return alert('You have to add more members');

    const groupList = getRandomGroupList(minMemberSize, groupSize, people.length);

    dispatch(setGroupingInputValues({ groupSize, minMemberSize }));
    dispatch(setRandomGroupList(groupList));

    history.push('/result');
  };

  return (
    <div>
      <h1>Grouping</h1>
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
            value={minMemberSize}
            name='minMemberSize'
            onChange={handleGroupingInput}
          />
        </Label>
        <ErrorMessageBox>
          {errorMessage ? errorMessage : ''}
        </ErrorMessageBox>
        <Button
          className='submit-button'
          title='Make Group!'
          onClick={handleSubmitButton}
        />
      </Wrapper>
    </div>
  );
};

export default GroupingFrom;
