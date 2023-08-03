import { styled } from 'styled-components';
import { HourSystem, THourSystem } from './Clock';
import { Dispatch, SetStateAction } from 'react';

interface IHourSystemBtnProps {
  hourSystem: THourSystem;
  setHourSystem: Dispatch<SetStateAction<THourSystem>>;
}

const HourSystemBtn = ({ hourSystem, setHourSystem }: IHourSystemBtnProps) => {
  const handleTwelveClick = () => {
    setHourSystem(HourSystem.twelve);
  };

  const handleTwentyFourClick = () => {
    setHourSystem(HourSystem.twentyFour);
  };

  return (
    <HourSystemBtnBox>
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
    </HourSystemBtnBox>
  );
};

const HourSystemBtnBox = styled.div`
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

export default HourSystemBtn;
