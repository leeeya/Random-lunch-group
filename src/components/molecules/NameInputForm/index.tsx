import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { createPerson } from '../../../modules/people';
import { RootState } from '../../../modules/rootReducer';
import { Wrapper } from '../../../styles/shared';

const NameInputForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { people } = useSelector((state: RootState) => state.people);

  const handleNameInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
  };

  const handleAddNameButton = async () => {
    if (people.find(person => person.name === name)) {
     alert('중복된 이름입니다.');
     setName('');
     return;
    }
    dispatch(createPerson(name));
    setName('');
  };

  return (
    <Wrapper>
      <h2>Add person!😋</h2>
        <Input
          className='name-input'
          name='name'
          value={name}
          placeholder='Enter member name!'
          onChange={handleNameInput}
        />
        <Button
          className='add-button'
          title='추가'
          onClick={handleAddNameButton}
        />
    </Wrapper>
  );
};

export default NameInputForm;
