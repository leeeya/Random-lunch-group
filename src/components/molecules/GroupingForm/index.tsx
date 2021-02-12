import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../../modules/rootReducer';
import { setGroupingInputValues, setRandomGroupList } from '../../../modules/people';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { getRandomGroupList } from '../../../utils/getRandomGroupList';
import { Wrapper, Label, ErrorMessageBox } from '../../../styles/shared';
import { MESSAGE, NAME, PATH, TITLE } from '../../../constants';

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
      setErrorMessage(MESSAGE.YOU_CAN_ONLY_ENTER_NUMBERS);

      if (name === NAME.GROUP_SIZE) return setGroupSize(0);
      return setMinMemberSize(0);
    }
    if (valueToNumber < 1 || 10 < valueToNumber) return setErrorMessage(MESSAGE.ONLY_NUMBERS_FROM_0_TO_10_CAN_BE_ENTERED);

    switch (name) {
      case NAME.GROUP_SIZE:
        setGroupSize(valueToNumber);
        break;
      case NAME.MIN_MEMBER_SIZE:
        setMinMemberSize(valueToNumber);
        break;
      default: alert(MESSAGE.NOT_EXISIT_NAME);
        break;
    }
  };

  const handleSubmitButton = () => {
    if (people.length < groupSize * minMemberSize) return alert(MESSAGE.YOU_HAVE_TO_ADD_MORE_MEMBERS);

    const groupList = getRandomGroupList(minMemberSize, groupSize, people.length);

    dispatch(setGroupingInputValues({ groupSize, minMemberSize }));
    dispatch(setRandomGroupList(groupList));

    history.push(PATH.RESULT);
  };

  return (
    <div>
      <h1>Grouping</h1>
      <Wrapper>
        <Label>✨Number of Group
        <Input
            value={groupSize}
            name={NAME.GROUP_SIZE}
            onChange={handleGroupingInput}
          />
        </Label>
        <Label>✨Minimum member size
        <Input
            value={minMemberSize}
            name={NAME.MIN_MEMBER_SIZE}
            onChange={handleGroupingInput}
          />
        </Label>
        <ErrorMessageBox>
          {errorMessage ? errorMessage : ''}
        </ErrorMessageBox>
        <Button
          className={NAME.SUBMIT_BUTTON}
          title={TITLE.MAKE_GROUP}
          onClick={handleSubmitButton}
        />
      </Wrapper>
    </div>
  );
};

export default GroupingFrom;
