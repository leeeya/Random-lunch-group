import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../AsideBoard';
import ResultPage from '../ResultPage';
import { AppWrapper } from '../../styles/shared';

const App: React.FC = (): ReactElement => {
  return (
    <AppWrapper>
      <AsideBoard />
      <Switch>
        <Route exact path='/'>
          <GroupingForm />
        </Route>
        <Route path='/result'>
          <ResultPage />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
