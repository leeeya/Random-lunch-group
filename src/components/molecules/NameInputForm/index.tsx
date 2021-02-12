import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { createPerson } from '../../../modules/people';
import { RootState } from '../../../modules/rootReducer';
import { Wrapper } from '../../../styles/shared';
import { MESSAGE, NAME, TITLE } from '../../../constants';

const NameInputForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { people } = useSelector((state: RootState) => state.people);

  const handleNameInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
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
