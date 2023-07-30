import styled from 'styled-components';

const Spacing = styled.div`
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
`;

export default Spacing;
