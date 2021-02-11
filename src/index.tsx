import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Globalstyles from '../src/styles/globalstyles';
import { Provider } from 'react-redux';
import store from '../src/modules';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Globalstyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
