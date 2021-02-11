import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { createPerson } from '../../../modules/people';

const NameInputForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleNameInput = ({ target }:  ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
  };

  const handleNameButton = async () => {
    dispatch(createPerson(name));
    setName('');
  };

  return (
    <div>
      <h2>add person!😋</h2>
      <Input
        className='name-input'
        value={name}
        onChange={handleNameInput}
      />
      <Button
        className='add-button'
        title='추가'
        onClick={handleNameButton}
      />
    </div>
  );
};

export default NameInputForm;
