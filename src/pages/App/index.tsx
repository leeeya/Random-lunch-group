import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../AsideBoard';
import ResultPage from '../ResultPage';
import { AppWrapper } from '../../styles/shared';
import { PATH } from '../../constants';

const App: React.FC = (): ReactElement => {
  return (
    <AppWrapper>
      <AsideBoard />
      <Switch>
        <Route exact path={PATH.MAIN}>
          <GroupingForm />
        </Route>
        <Route path={PATH.RESULT}>
          <ResultPage />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
