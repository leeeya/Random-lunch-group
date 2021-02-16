import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../modules/rootReducer';
import GroupList from '../../components/molecules/GroupList';
import Button from '../../components/atoms/Button';
import { ResultPageWrapper } from '../../styles/shared';
import { NAME, TITLE } from '../../constants';
import { ResultPageProps } from '../../types';

const ResultPage: React.FC<ResultPageProps> = ({
  onClick,
  data,
}): ReactElement => {
  const history = useHistory();
  const people = useSelector((state: RootState) => state.people.people);
  const randomGroupList = useSelector((state: RootState) => state.people.randomGroupList);

  const handleAgainButton = () => {
    onClick(data.minMemberSize, data.groupSize, data.peopleSize);
  };

  const handleGoBackButton = () => {
    history.goBack();
  };

  return (
    <ResultPageWrapper>
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
    </ResultPageWrapper>
  );
};

export default ResultPage;
