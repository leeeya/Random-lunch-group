import React, { useState, ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/rootReducer';
import { createPerson } from '../../../modules/people';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { Wrapper } from '../../../styles/shared';
import { MESSAGE, NAME, TITLE } from '../../../constants';

const NameInputForm: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const people = useSelector((state: RootState) => state.people.people);

  const handleNameInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
  };

  const handleAddNameButton = async () => {
    if (people.find(person => person.name === name)) {
      alert(MESSAGE.THIS_IS_A_DUPLICATE_NAME);
      setName('');

      return;
    }
    dispatch(createPerson(name));
    setName('');
  };

  return (
    <Wrapper>
      <h2>Add Person!😋</h2>
      <Input
        name={NAME.NAME}
        value={name}
        placeholder={TITLE.ENTER_MEMBER_NAME}
        onChange={handleNameInput}
      />
      <Button
        className={NAME.ADD_BUTTON}
        title={TITLE.ADD}
        onClick={handleAddNameButton}
      />
    </Wrapper>
  );
};

export default NameInputForm;
