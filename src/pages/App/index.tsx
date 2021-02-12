import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GroupingForm from '../../components/molecules/GroupingForm';
import AsideBoard from '../AsideBoard';
import ResultPage from '../ResultPage';

const App: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <AsideBoard />
      <Switch>
        <Route exact path='/'>
          <GroupingForm />
        </Route>
        <Route path='/result'>
          <ResultPage />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2.5fr;
  justify-items: center;
  padding: 80px;
`;

export default App;
