import { styled } from 'styled-components';

interface IDotProps {
  number: number;
}

const Dot = styled.div<IDotProps>`
  width: 20px;
  height: 20px;
  background-color: ${({ number }) => (number % 2 ? '#00f604' : 'none')};
`;

export default Dot;
