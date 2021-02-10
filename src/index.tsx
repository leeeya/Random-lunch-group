import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Globalstyles from '../src/styles/globalstyles';
import { Provider } from 'react-redux';
import store from '../src/store';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Globalstyles />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
