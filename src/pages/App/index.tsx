import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import AsideBoard from '../AsideBoard';
import styled from 'styled-components';
import Main from '../Main';

const App: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <AsideBoard />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/result'>
          <h1>result</h1>
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
