import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import themes from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${themes.color.white}
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  h1 {
    font-size: ${themes.fontSize.large}
  }

  h2 {
    font-size: ${themes.fontSize.medium}
  }

  h3 {
    font-size: ${themes.fontSize.regular}
  }

  p {
    font-size: ${themes.fontSize.small}
  }
`;

export default GlobalStyle;
