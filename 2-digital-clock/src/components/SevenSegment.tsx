import { styled } from 'styled-components';
import Hexagon from './Hexagon';

interface ISevenSegmentProps {
  number: number;
}

const segmentData = [
  { top: 0, left: 10, offArr: [1, 4], rotate: false },
  { top: 50, left: -22, offArr: [1, 2, 3], rotate: true },
  { top: 50, left: 59, offArr: [5, 6], rotate: true },
  { top: 83, left: 10, offArr: [0, 1, 7], rotate: false },
  { top: 133, left: -22, offArr: [1, 3, 4, 5, 7, 9], rotate: true },
  { top: 133, left: 59, offArr: [2], rotate: true },
  { top: 166, left: 10, offArr: [1, 4, 7], rotate: false },
];

const SevenSegment = ({ number }: ISevenSegmentProps) => {
  const hexagons = segmentData.map(({ top, left, offArr, rotate }, idx) => (
    <Hexagon
      key={idx}
      width={80}
      height={17}
      top={top}
      left={left}
      ison={!offArr.includes(number)}
      rotate={rotate}
    />
  ));

  return <SevenSegmentBox>{hexagons}</SevenSegmentBox>;
};

const SevenSegmentBox = styled.div`
  position: relative;
  width: 100px;
  height: 185px;
`;

export default SevenSegment;
