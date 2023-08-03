import { styled } from 'styled-components';
import Display from './Display';
import { useState } from 'react';
import HourSystemBtn from './HourSystemBtn';
import ModeSwitch from './ModeSwitch';
import Spacing from './Spacing';
import TimerModeBtn from './TimerModeBtn';

export type TMode = 'clock' | 'timer';
export type THourSystem = 12 | 24;

export enum Mode {
  clock = 'clock',
  timer = 'timer',
}

export enum HourSystem {
  twelve = 12,
  twentyFour = 24,
}

const Clock = () => {
  const [mode, setMode] = useState<TMode>(Mode.clock);
  const [hourSystem, setHourSystem] = useState<THourSystem>(HourSystem.twelve);

  const handleToggle = (checked: boolean) => {
    if (checked) {
      setMode(Mode.timer);
    } else {
      setMode(Mode.clock);
    }
  };

  return (
    <ClockBox>
      <DisplayBox>
        <Display mode={mode} hourSystem={hourSystem} />
      </DisplayBox>
      <Spacing width={0} height={40} />
      <ControlBox>
        <ModeSwitch onToggle={handleToggle} defaultChecked={false} />
        {mode === Mode.clock ? (
          <HourSystemBtn
            hourSystem={hourSystem}
            setHourSystem={setHourSystem}
          />
        ) : (
          <TimerModeBtn />
        )}
      </ControlBox>
    </ClockBox>
  );
};

const ClockBox = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  border-radius: 30px;
  padding: 50px 25px;
`;

const DisplayBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
`;

export default Clock;
