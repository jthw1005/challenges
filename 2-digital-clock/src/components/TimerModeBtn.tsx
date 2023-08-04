import { styled } from 'styled-components';
import { Hour, Minute, Second } from '../recoil/time';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
import { clear } from 'console';

const TimerModeBtn = () => {
  const setHour = useSetRecoilState<string>(Hour);
  const [minute, setMinute] = useRecoilState<string>(Minute);
  const setSecond = useSetRecoilState<number>(Second);
  const resetHour = useResetRecoilState(Hour);
  const resetMinute = useResetRecoilState(Minute);
  const resetSecond = useResetRecoilState(Second);

  const timerRef = useRef<number | null>(null);
  const secondTimerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current && secondTimerRef.current) {
      clearTimeout(timerRef.current);
      clearTimeout(secondTimerRef.current);
    }
    timerRef.current = null;
    secondTimerRef.current = null;
  };

  const handleStartBtnClick = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = window.setInterval(() => {
      setMinute((prev) => String(+prev + 1).padStart(2, '0'));
    }, 1000);

    secondTimerRef.current = window.setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 500);
  };

  const handlePauseBtnClick = () => {
    resetTimer();
  };

  const handleResetBtnClick = () => {
    resetHour();
    resetMinute();
  };

  useEffect(() => {
    if (+minute === 60) {
      resetMinute();
      setHour((prev) => String(+prev + 1).padStart(2, '0'));
    }
  }, [minute]);

  useEffect(() => {
    return () => {
      resetTimer();
      resetSecond();
    };
  }, []);

  return (
    <TimerModeBtnBox>
      <Btn onClick={handleStartBtnClick}>start</Btn>
      <Btn onClick={handlePauseBtnClick}>pause</Btn>
      <Btn onClick={handleResetBtnClick}>reset</Btn>
    </TimerModeBtnBox>
  );
};

const TimerModeBtnBox = styled.div`
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

export default TimerModeBtn;
