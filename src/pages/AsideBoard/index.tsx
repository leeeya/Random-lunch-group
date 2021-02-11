import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/rootReducer';
import styled from 'styled-components';
import NameInputForm from '../../components/molecules/NameInputForm';
import NameList from '../../components/templates/NameList';
import { getPeople } from '../../modules/people';

const AsideBoard: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { people, error } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  useEffect(() => {
    if (!error) return;

    alert(error.message);
  }, [error]);

  return (
    <Wrapper>
      <NameInputForm />
      <NameList data={people} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default AsideBoard;
