import { styled } from 'styled-components';

const TimerModeBtn = () => {
  const handleStartBtnClick = () => {};

  const handlePauseBtnClick = () => {};

  const handleResetBtnClick = () => {};

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
