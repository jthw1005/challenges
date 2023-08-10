import { styled } from 'styled-components';
import { HourSystem, Mode, THourSystem, TMode } from './Clock';
import AMPMIndicator from './AMPMIndicator';
import SevenSegment from './SevenSegment';
import Dot from './Dot';

interface IDisplayProps {
  mode: TMode;
  hourSystem: THourSystem;
  number: string;
  isRunning: boolean;
}

const Display = ({ mode, hourSystem, number, isRunning }: IDisplayProps) => {
  const isAMPMOn = mode === Mode.clock && hourSystem === HourSystem.twelve;

  return (
    <DisplayBox>
      <SevenSegmentBox>
        <SevenSegment number={+number[0]} />
        <SevenSegment number={+number[1]} />
        <DotWrapper>
          <Dot isblink={isRunning} />
          <Dot isblink={isRunning} />
        </DotWrapper>
        <SevenSegment number={+number[2]} />
        <SevenSegment number={+number[3]} />
      </SevenSegmentBox>
      {isAMPMOn && <AMPMIndicator />}
    </DisplayBox>
  );
};

const DisplayBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 350px;
  border: 1px solid black;
  border-radius: 25px;
`;

const SevenSegmentBox = styled.div`
  display: flex;
  gap: 30px;
`;

const DotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 45px;
`;

export default Display;
