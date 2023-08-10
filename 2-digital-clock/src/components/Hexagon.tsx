import { styled } from 'styled-components';

interface IHexagonProps {
  width: number;
  height: number;
  top: number;
  left: number;
  ison: boolean;
  rotate: boolean;
}

interface IHexagonWrapperProps {
  width: number;
  top: number;
  left: number;
  rotate: boolean;
}

interface IHexagonContentProps {
  width: number;
  height: number;
  ison: boolean;
}

const Hexagon = ({ width, height, top, left, rotate, ison }: IHexagonProps) => (
  <HexagonWrapper width={width} top={top} left={left} rotate={rotate}>
    <HexagonContent width={width} height={height} ison={ison} />
  </HexagonWrapper>
);

const HexagonWrapper = styled.div<IHexagonWrapperProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: transparent;
  transform: ${({ rotate }) => (rotate ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const HexagonContent = styled.div<IHexagonContentProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  clip-path: ${({ width, height }) =>
    `polygon(${Math.round((height * 50) / width)}% 0%, ${Math.round(
      100 - (height * 50) / width
    )}% 0%, 100% 50%, ${Math.round(
      100 - (height * 50) / width
    )}% 100%, ${Math.round((height * 50) / width)}% 100%, 0% 50%)`};
  background-color: ${({ ison }) => (ison ? '#00F604' : '#fff')};
`;

export default Hexagon;
