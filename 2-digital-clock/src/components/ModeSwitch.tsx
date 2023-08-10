import { useState } from 'react';
import { styled } from 'styled-components';
import { Mode, TMode } from './Clock';

interface IModeSwitchProps {
  setMode: React.Dispatch<React.SetStateAction<TMode>>;
  defaultCheckState: boolean;
}

const ModeSwitch = ({
  setMode,
  defaultCheckState = false,
}: IModeSwitchProps) => {
  const [isChecked, setIsChecked] = useState(defaultCheckState);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);

    if (isChecked) {
      setMode(Mode.clock);
    } else {
      setMode(Mode.timer);
    }
  };

  return (
    <ModeSwitchBox>
      <Description>Clock Timer</Description>
      <Switch>
        <Checkbox type="checkbox" checked={isChecked} onChange={handleToggle} />
        <Slider />
      </Switch>
    </ModeSwitchBox>
  );
};

const ModeSwitchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.span`
  /* padding: */
  font-size: 20px;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 110px;
  height: 60px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 52px;
    width: 52px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}::before {
    transform: translateX(50px);
  }
`;

export default ModeSwitch;
