import React, { ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setRandomGroupList } from '../../modules/people';
import { RootState } from '../../modules/rootReducer';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../AsideBoard';
import ResultPage from '../ResultPage';
import { getRandomGroupList } from '../../utils/getRandomGroupList';
import { AppWrapper } from '../../styles/shared';
import { PATH } from '../../constants';

const App: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const people = useSelector((state: RootState) => state.people.people);
  const inputValues = useSelector((state: RootState) => state.people.groupingInputValues);

  const makeGroupList = () => {
    const groupList = getRandomGroupList(inputValues.minMemberSize, inputValues.groupSize, people.length);

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
          <ResultPage onClick={makeGroupList} />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
