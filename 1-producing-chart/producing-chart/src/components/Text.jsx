import { styled } from 'styled-components';

const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  width: ${({ width }) => width && `${width}px`};
`;

export default Text;
