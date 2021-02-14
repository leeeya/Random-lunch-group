import '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

type PropsWithChildren = { children?: React.ReactNode };

const AllTheProviders = ({ children } : PropsWithChildren) : React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement<any>) =>
render(ui, { wrapper: AllTheProviders });

export { customRender as render };
