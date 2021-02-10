import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = (): ReactElement => {
  return (
    <>
      <h1>People</h1>
      <Switch>
        <Route exact path='/'>
          <h1>Lunch</h1>
        </Route>
        <Route path='/result'>
          <h1>result</h1>
        </Route>
      </Switch>
    </>
  );
};

export default App;
