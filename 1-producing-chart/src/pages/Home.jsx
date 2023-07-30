import styled from 'styled-components';
import Button from '../components/Button';
import { useState } from 'react';
import Spacing from '../components/Spacing';
import Text from '../components/Text';

const Home = () => {
  const [scoreData, setScoreData] = useState({
    Alex: undefined,
    Tom: undefined,
    Ryan: undefined,
    Don: undefined,
    Emma: undefined,
  });

  const studentCol = Object.keys(scoreData).map((studentName, idx) => (
    <ColumnValueBox key={idx}>
      <Text fontSize="30">{studentName}</Text>
    </ColumnValueBox>
  ));

  const scoreCol = Object.values(scoreData).map((studentScore, idx) => (
    <ColumnValueBox key={idx}>
      <ScoreInput value={studentScore} placeholder="fill in the score" />
    </ColumnValueBox>
  ));

  return (
    <HomeBox>
      <ScoreBox>
        <ColumnBox width="160">
          <Text fontSize="30">Student</Text>
          <Spacing height="30" />
          {studentCol}
        </ColumnBox>

        <ColumnBox width="340">
          <Text fontSize="30">Score</Text>
          <Spacing height="30" />
          {scoreCol}
        </ColumnBox>
      </ScoreBox>

      <BottomBtnBox>
        <Button text="Make Chart" fontSize={25} width={170} height={60} />
        <Button text="Reset Data" fontSize={25} width={170} height={60} />
      </BottomBtnBox>
    </HomeBox>
  );
};

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 700px;
  padding: 40px;
  font-size: 60px;
  border: 1px solid black;
  border-radius: 20px;
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  overflow: scroll;
`;

const ColumnBox = styled.div`
  text-align: center;
  width: ${({ width }) => width && `${width}px`};
`;

const ColumnValueBox = styled.div`
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 30px;
  font-size: 30px;
`;

const ScoreInput = styled.input`
  font-size: 30px;
  height: 30px;
  text-align: center;
  &::placeholder {
    color: lightgray;
  }
`;

const BottomBtnBox = styled.div`
  display: flex;
  gap: 100px;
`;

export default Home;
