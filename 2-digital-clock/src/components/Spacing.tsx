import { styled } from 'styled-components';

interface ISpacingProps {
  width?: number;
  height?: number;
}

const Spacing = styled.div<ISpacingProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export default Spacing;
