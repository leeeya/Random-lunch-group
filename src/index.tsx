import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from '../src/modules';
import Globalstyles from '../src/styles/globalstyles';
import { theme } from './styles/theme';
import App from './pages/App';

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
