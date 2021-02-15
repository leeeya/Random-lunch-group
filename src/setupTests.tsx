import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './modules';

type PropsWithChildren = { children?: React.ReactNode };

const AllTheProviders = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement<any>) =>
  render(ui, { wrapper: AllTheProviders });

export { customRender as render };
