import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/rootReducer';
import styled from 'styled-components';
import { flexColumnCenter } from '../../styles/mixin';
import NameInputForm from '../../components/molecules/NameInputForm';
import NameList from '../../components/templates/NameList';
import { getPeople } from '../../modules/people';

const AsideBoard: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { people, error } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <Wrapper>
      <NameInputForm />
      <NameList data={people} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexColumnCenter}
`;

export default AsideBoard;
