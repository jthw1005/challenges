import { styled } from 'styled-components';
import { HourSystem, Mode, THourSystem, TMode } from './Clock';
import AMPMIndicator from './AMPMIndicator';
import SevenSegment from './SevenSegment';
import Dot from './Dot';
import { useEffect, useRef } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Hour, Minute, Second } from '../recoil/time';

interface IDisplayProps {
  mode: TMode;
  hourSystem: THourSystem;
}

const Display = ({ mode, hourSystem }: IDisplayProps) => {
  const [hour, setHour] = useRecoilState<string>(Hour);
  const [minute, setMinute] = useRecoilState<string>(Minute);
  const [second, setSecond] = useRecoilState<number>(Second);
  const resetHour = useResetRecoilState(Hour);
  const resetMinute = useResetRecoilState(Minute);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mode === Mode.timer) {
      return;
    }

    const now = new Date();
    setHour(
      String(
        hourSystem === HourSystem.twentyFour
          ? now.getHours()
          : now.getHours() % 12
      ).padStart(2, '0')
    );
    setMinute(String(now.getMinutes()).padStart(2, '0'));
  }, [second, mode]);

  useEffect(() => {
    if (mode === Mode.clock) {
      if (!timerRef.current) {
        timerRef.current = window.setInterval(() => {
          setSecond((prev) => prev + 1);
        }, 500);
      }
      return;
    }

    resetHour();
    resetMinute();

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [mode]);

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
      {mode === Mode.clock && hourSystem === HourSystem.twelve && (
        <AMPMIndicator />
      )}
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
