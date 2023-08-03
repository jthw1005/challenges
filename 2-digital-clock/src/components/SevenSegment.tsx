import { styled } from 'styled-components';
import Hexagon from './Hexagon';

interface ISevenSegmentProps {
  number: number;
}

const SevenSegment = ({ number }: ISevenSegmentProps) => {
  const data = [
    { top: 0, left: 10, isOn: number !== 1 && number !== 4, rotate: false },
    {
      top: 50,
      left: -22,
      isOn: number !== 1 && number !== 2 && number !== 3,
      rotate: true,
    },
    { top: 50, left: 59, isOn: number !== 5 && number !== 6, rotate: true },
    {
      top: 83,
      left: 10,
      isOn: number !== 0 && number !== 1 && number !== 7,
      rotate: false,
    },
    {
      top: 133,
      left: -22,
      isOn:
        number !== 1 &&
        number !== 3 &&
        number !== 4 &&
        number !== 5 &&
        number !== 7 &&
        number !== 9,
      rotate: true,
    },
    {
      top: 133,
      left: 59,
      isOn: number !== 2,
      rotate: true,
    },
    {
      top: 166,
      left: 10,
      isOn: number !== 1 && number !== 4 && number !== 7,
      rotate: false,
    },
  ];

  const hexagons = data.map(({ top, left, isOn, rotate }) => (
    <Hexagon
      width={80}
      height={17}
      top={top}
      left={left}
      isOn={isOn}
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
