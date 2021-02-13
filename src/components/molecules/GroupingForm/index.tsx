import React, { ChangeEvent, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../modules/rootReducer';
import { setGroupingInputValues } from '../../../modules/people';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { FormWrapper, Wrapper, Label, ErrorMessageBox } from '../../../styles/shared';
import { MESSAGE, NAME, TITLE } from '../../../constants';
import { GroupingFromProps } from '../../../types';

const GroupingFrom: React.FC<GroupingFromProps> = ({
  onClick,
}): ReactElement => {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.people.people);
  const [groupSize, setGroupSize] = useState<number>(0);
  const [minMemberSize, setMinMemberSize] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGroupingInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
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

    dispatch(setGroupingInputValues({ groupSize, minMemberSize }));
  };

  const handleSubmitButton = () => {
    if (people.length < groupSize * minMemberSize)
      return alert(MESSAGE.YOU_HAVE_TO_ADD_MORE_MEMBERS);

    onClick();
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default GroupingFrom;
