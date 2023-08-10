import { css, keyframes, styled } from 'styled-components';

interface IDotProps {
  isblink: boolean;
}

const Dot = styled.div<IDotProps>`
  width: 20px;
  height: 20px;
  background-color: #00f604;
  animation: ${({ isblink }) => {
    return isblink
      ? css`
          ${blink} 1s steps(1) infinite
        `
      : 'none';
  }};
`;

const blink = keyframes`
    0%, 100% {
      background-color: #00f604;
    }
    50% {
      background-color: #fff;
    }
`;

export default Dot;
