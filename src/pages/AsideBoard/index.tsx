import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NameInputForm from '../../components/molecules/NameInputForm';

const AsideBoard: React.FC = (): ReactElement => {
  return (
    <div>
      <NameInputForm />
    </div>
  );
};

export default AsideBoard;
