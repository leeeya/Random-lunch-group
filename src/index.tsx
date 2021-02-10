import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Globalstyles from '../src/styles/globalstyles';
import { Provider } from 'react-redux';
import store from '../src/modules';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Globalstyles />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
