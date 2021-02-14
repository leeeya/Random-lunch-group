import React, { useState, ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRandomGroupList } from '../../modules/people';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../AsideBoard';
import ResultPage from '../ResultPage';
import { getRandomGroupList } from '../../utils/getRandomGroupList';
import { AppWrapper } from '../../styles/shared';
import { PATH } from '../../constants';

const App: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    groupSize: 0,
    minMemberSize: 0,
    peopleSize: 0,
  });

  const makeGroupList = (minMemberSize: number, groupSize: number, peopleSize: number) => {
    setInputValues({ groupSize, minMemberSize, peopleSize });
    const groupList = getRandomGroupList(minMemberSize, groupSize, peopleSize);

    dispatch(setRandomGroupList(groupList));

    if (history.location.pathname === PATH.MAIN) history.push(PATH.RESULT);
  };

  return (
    <AppWrapper>
      <AsideBoard />
      <Switch>
        <Route exact path={PATH.MAIN}>
          <GroupingForm onClick={makeGroupList} />
        </Route>
        <Route path={PATH.RESULT}>
          <ResultPage
            onClick={makeGroupList}
            data={inputValues}
          />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
