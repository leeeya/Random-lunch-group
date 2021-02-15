import React, { useState, useEffect, ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/rootReducer';
import { setRandomGroupList, getPeople } from '../../modules/people';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../../components/templates/AsideBoard';
import ResultPage from '../../components/templates/ResultPage';
import { getRandomGroupList } from '../../utils/getRandomGroupList';
import { AppWrapper } from '../../styles/shared';
import { PATH } from '../../constants';

const App: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const people = useSelector((state: RootState) => state.people.people);
  const error = useSelector((state: RootState) => state.people.error);

  const [inputValues, setInputValues] = useState({
    groupSize: 0,
    minMemberSize: 0,
    peopleSize: 0,
  });

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  useEffect(() => {
    if (!error) return;

    alert(error.message);
  }, [error]);

  const makeGroupList = (minMemberSize: number, groupSize: number, peopleSize: number) => {
    setInputValues({ groupSize, minMemberSize, peopleSize });
    const groupList = getRandomGroupList(minMemberSize, groupSize, peopleSize);

    dispatch(setRandomGroupList(groupList));

    if (history.location.pathname === PATH.MAIN) history.push(PATH.RESULT);
  };

  return (
    <AppWrapper>
      <AsideBoard boardData={people} />
      <Switch>
        <Route exact path={PATH.MAIN}>
          <GroupingForm onSubmit={makeGroupList} />
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
