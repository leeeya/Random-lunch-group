import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const AsideBoard: React.FC = (): ReactElement => {
  const [name, setName] = useState('');

  const handleNameInput = ({ target }:  ChangeEvent<HTMLInputElement>): void => {
    setName(target.value);
  };

  const handleNameButton = () => {
    console.log('create person');
  };

  return (
    <div>
      <h1>People</h1>
      <Input
        className='name-input'
        value={name}
        onChange={handleNameInput} />
      <Button
        className='add-button'
        title='추가'
        onClick={handleNameButton}
      />
    </div>
  );
};

export default AsideBoard;
