import { styled } from 'styled-components';
import { HourSystem, THourSystem } from './Clock';
import { Dispatch, SetStateAction, useEffect } from 'react';
import useInterval from '../hooks/useInterval';

interface IClockControlBtnProps {
  hourSystem: THourSystem;
  setHourSystem: Dispatch<SetStateAction<THourSystem>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClockControlBtn = ({
  hourSystem,
  setHourSystem,
  setNumber,
  setIsRunning,
}: IClockControlBtnProps) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hour = String(
      hourSystem === HourSystem.twentyFour
        ? now.getHours()
        : now.getHours() > 12
        ? now.getHours() - 12
        : now.getHours()
    ).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return hour + minute;
  };

  useEffect(() => {
    const currentTime = getCurrentTime();
    setNumber(currentTime);
    setIsRunning(true);
  }, [hourSystem]);

  useInterval(() => {
    const currentTime = getCurrentTime();
    setNumber(currentTime);
  }, 1000);

  const handleTwelveClick = () => {
    setHourSystem(HourSystem.twelve);
  };

  const handleTwentyFourClick = () => {
    setHourSystem(HourSystem.twentyFour);
  };

  return (
    <ClockControlBtnBox>
      <Btn
        onClick={handleTwelveClick}
        selected={hourSystem === HourSystem.twelve}
      >
        12
      </Btn>
      <Btn
        onClick={handleTwentyFourClick}
        selected={hourSystem === HourSystem.twentyFour}
      >
        24
      </Btn>
    </ClockControlBtnBox>
  );
};

const ClockControlBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 150px;
  height: 70px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`;

const Btn = styled.button<{ selected: boolean }>`
  width: 65px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${({ selected }) => (selected ? 'lightgray' : 'none')};
`;

export default ClockControlBtn;
