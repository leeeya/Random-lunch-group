import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GroupList from '../../components/templates/GroupList';
import Button from '../../components/atoms/Button';
import { flexRowCenter } from '../../styles/mixin';
import { RootState } from '../../modules/rootReducer';
import { setRandomGroupList } from '../../modules/people';
import { getRandomGroupList } from '../../utils/getRandomGroupList';

const ResultPage: React.FC = () : ReactElement=> {
  const dispatch = useDispatch();
  const history = useHistory();
  const { people, randomGroupList, groupingInputValues  } = useSelector((state: RootState) => state.people);

  const handleAgainButton = () => {
    const groupList = getRandomGroupList(groupingInputValues.minMemberSize, groupingInputValues.groupSize, people.length);
    dispatch(setRandomGroupList(groupList));
  };

  const handleGoBackButton = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <GroupList data={{ people, randomGroupList}} />
      <Button
        className='again-button'
        title='Again!'
        onClick={handleAgainButton}
      />
      <Button
        className='go-back-button'
        title='◀ Go Back'
        onClick={handleGoBackButton}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexRowCenter}
`;

export default ResultPage;
