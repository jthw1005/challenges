import { styled } from 'styled-components';
import Display from './Display';
import { useState } from 'react';
import ClockControlBtn from './ClockControlBtn';
import ModeSwitch from './ModeSwitch';
import Spacing from './Spacing';
import TimerControlBtn from './TimerControlBtn';

export type TMode = keyof typeof Mode;
export type THourSystem = (typeof HourSystem)[keyof typeof HourSystem];

export enum Mode {
  clock = 'clock',
  timer = 'timer',
}

export enum HourSystem {
  twelve = 12,
  twentyFour = 24,
}

export const DEFAULT_NUMBER = '0000';

const Clock = () => {
  const [number, setNumber] = useState<string>(DEFAULT_NUMBER);
  const [mode, setMode] = useState<TMode>(Mode.clock);
  const [hourSystem, setHourSystem] = useState<THourSystem>(HourSystem.twelve);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const controlBtn =
    mode === Mode.clock ? (
      <ClockControlBtn
        hourSystem={hourSystem}
        setHourSystem={setHourSystem}
        setNumber={setNumber}
        setIsRunning={setIsRunning}
      />
    ) : (
      <TimerControlBtn
        number={number}
        setNumber={setNumber}
        setIsRunning={setIsRunning}
        isRunning={isRunning}
      />
    );

  const padedNumber = number.padStart(4, '0');

  return (
    <ClockBox>
      <Display
        mode={mode}
        hourSystem={hourSystem}
        number={padedNumber}
        isRunning={isRunning}
      />
      <Spacing width={0} height={40} />
      <ControlBtnBox>
        <ModeSwitch setMode={setMode} defaultCheckState={false} />
        {controlBtn}
      </ControlBtnBox>
    </ClockBox>
  );
};

const ClockBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 25px;
  border: 1px solid black;
  border-radius: 30px;
`;

const ControlBtnBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
`;

export default Clock;
