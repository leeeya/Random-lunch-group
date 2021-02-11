import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { createPerson } from '../../../modules/people';
import { flexColumnCenter } from '../../../styles/mixin';

const NameInputForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleNameInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
  };

  const handleNameButton = async () => {
    dispatch(createPerson(name));
    setName('');
  };

  return (
    <Wrapper>
      <h2>Add person!😋</h2>
      <div>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexColumnCenter}

  margin-bottom: 24px;
`;

export default NameInputForm;
