import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../modules/rootReducer';
import { setRandomGroupList } from '../../modules/people';
import GroupList from '../../components/templates/GroupList';
import Button from '../../components/atoms/Button';
import { getRandomGroupList } from '../../utils/getRandomGroupList';
import { Wrapper } from '../../styles/shared';
import { NAME, TITLE } from '../../constants';

const ResultPage: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { people, randomGroupList, groupingInputValues } = useSelector((state: RootState) => state.people);

  const handleAgainButton = () => {
    const groupList = getRandomGroupList(groupingInputValues.minMemberSize, groupingInputValues.groupSize, people.length);

    dispatch(setRandomGroupList(groupList));
  };

  const handleGoBackButton = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <GroupList data={{ people, randomGroupList }} />
      <Button
        className={NAME.AGAIN_BUTTON}
        title={TITLE.AGAIN}
        onClick={handleAgainButton}
      />
      <Button
        className={NAME.GO_BACK_BUTTON}
        title={TITLE.GO_BACK}
        onClick={handleGoBackButton}
      />
    </Wrapper>
  );
};

export default ResultPage;
