import { DefaultTheme } from 'styled-components';

const themes: DefaultTheme = {
  fontSize : {
    large: '48px',
    medium: '28px',
    regular: '18px',
    small: '16px',
    micro: '14px',
  },
  fontWeight: {
    bold: 700,
    reqular: 400,
    light: 300,
  },
  color : {
    black: '#222831',
    white: '#f9f7f7',
    grey: '#c9d6df',
    lightGrey: '#f0f5f9',
    darkGrey:'#52616b',
    navy:'#0a043c',
    green:'#03506f',
    orange: '#ff5722',
    red:'#d72323',
  },
  duration: '300ms',
  borderRadius: '8px',
  boxShadow : {
    default: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    deep: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  }
};

export default themes;
