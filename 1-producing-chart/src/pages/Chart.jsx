import { useRecoilValue } from 'recoil';
import { ScoreData } from '../recoil/scoreData';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import Button from '../components/Button';
import Spacing from '../components/Spacing';
import { useNavigate } from 'react-router-dom';
import { createBarChart, createPiChart } from '../utils/canvas';

const Chart = () => {
  const PI = 'pi';
  const BAR = 'bar';
  const COLOR = ['#FF6384', '#36A2EB', '#FFCE56', '#995c98', '#4bc082'];

  const navigate = useNavigate();
  const scoreData = useRecoilValue(ScoreData);
  const [mode, setMode] = useState(true);
  const canvasRef = useRef(null);

  const handleToggleBtnClick = () => {
    setMode((prev) => !prev);
  };

  const handleBackBtnClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (mode) {
      createPiChart(canvas, ctx, scoreData, COLOR);
    } else {
      createBarChart(canvas, ctx, scoreData, COLOR);
    }
  }, [scoreData, mode]);

  return (
    <ChartBox>
      <BtnBox>
        <Button
          text="Back"
          fontSize={25}
          width={150}
          height={40}
          type="button"
          onClick={handleBackBtnClick}
        />
        <Button
          text={mode ? PI : BAR}
          fontSize={25}
          width={150}
          height={40}
          type="button"
          onClick={handleToggleBtnClick}
        />
      </BtnBox>

      <Spacing height="30" />

      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </ChartBox>
  );
};

const ChartBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 700px;
  padding: 40px;
  font-size: 60px;
  border: 1px solid black;
  border-radius: 20px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default Chart;
