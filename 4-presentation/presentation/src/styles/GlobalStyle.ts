import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default GlobalStyle;
