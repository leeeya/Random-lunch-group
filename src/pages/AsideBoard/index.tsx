import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/rootReducer';
import NameInputForm from '../../components/molecules/NameInputForm';
import NameList from '../../components/templates/NameList';
import { getPeople } from '../../modules/people';
import { BoardWrapper } from '../../styles/shared';

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
    <BoardWrapper>
      <NameInputForm />
      <NameList data={people} />
    </BoardWrapper>
  );
};

export default AsideBoard;
