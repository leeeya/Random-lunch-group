import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    position: fixed;
    margin: 0;
    padding: 0;
    background-color: ${theme.color.lightGrey};
  }

  button {
    background: ${theme.color.navy};
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  h1 {
    font-size: ${theme.fontSize.large};
  }

  h2 {
    font-size: ${theme.fontSize.medium}
  }

  p {
    font-size: ${theme.fontSize.regular}
  }
`;

export default GlobalStyle;
