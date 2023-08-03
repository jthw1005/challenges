import { styled } from 'styled-components';
import { HourSystem, THourSystem, TMode } from './Clock';
import AMPMIndicator from './AMPMIndicator';
import SevenSegment from './SevenSegment';
import Dot from './Dot';
import { useEffect, useState } from 'react';

interface IDisplayProps {
  mode: TMode;
  hourSystem: THourSystem;
}

const Display = ({ mode, hourSystem }: IDisplayProps) => {
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    setHour(String(now.getHours()).padStart(2, '0'));
    setMinute(String(now.getMinutes()).padStart(2, '0'));
  }, [second]);

  return (
    <DisplayBox>
      <SevenSegmentBox>
        <SevenSegment number={+hour[0]} />
        <SevenSegment number={+hour[1]} />
        <DotWrapper>
          <Dot number={second} />
          <Dot number={second} />
        </DotWrapper>
        <SevenSegment number={+minute[0]} />
        <SevenSegment number={+minute[1]} />
      </SevenSegmentBox>
      {hourSystem === HourSystem.twelve && <AMPMIndicator hour={hour} />}
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
