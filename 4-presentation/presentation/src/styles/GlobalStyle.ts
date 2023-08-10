import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  button {
    background-color: transparent;
  }
`;

export default GlobalStyle;
