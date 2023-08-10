import { styled } from 'styled-components';
import { useEffect } from 'react';
import { DEFAULT_NUMBER } from './Clock';
import useInterval from '../hooks/useInterval';

interface ITimerControlBtn {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isRunning: boolean;
}

const TimerControlBtn = ({
  number,
  setNumber,
  setIsRunning,
  isRunning,
}: ITimerControlBtn) => {
  useEffect(() => {
    setNumber(DEFAULT_NUMBER);
    setIsRunning(false);

    return () => {
      setIsRunning(false);
    };
  }, []);

  useEffect(() => {
    if (+number % 100 === 60) {
      setNumber(
        (prev) => String(Math.floor(+prev / 100) + 1).padStart(2, '0') + '00'
      );
    }
  }, [number]);

  useInterval(
    () => {
      setNumber((prev) => String(+prev + 1).padStart(4, '0'));
    },
    isRunning ? 1000 : null
  );

  const handleStartBtnClick = () => {
    setIsRunning(true);
  };

  const handlePauseBtnClick = () => {
    setIsRunning(false);
  };

  const handleResetBtnClick = () => {
    setNumber(DEFAULT_NUMBER);
  };

  return (
    <TimerControlBtnBox>
      <Btn onClick={handleStartBtnClick}>start</Btn>
      <Btn onClick={handlePauseBtnClick}>pause</Btn>
      <Btn onClick={handleResetBtnClick}>reset</Btn>
    </TimerControlBtnBox>
  );
};

const TimerControlBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 225px;
  height: 70px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
`;

const Btn = styled.button`
  width: 65px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid black;
  &:active {
    background-color: lightgray;
  }
`;

export default TimerControlBtn;
