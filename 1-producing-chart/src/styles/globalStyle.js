import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  input {
    border: none;
    background-color: transparent;
    outline: none;
    font-family: inherit;
    padding: 0;
  }
`;

export default GlobalStyle;
