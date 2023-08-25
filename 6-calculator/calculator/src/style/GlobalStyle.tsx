import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: orange;
      border-radius: 5px;
      transition: background-color 1s ease;
    }
  }
`;

export default GlobalStyle;
