import styled from 'styled-components';
import Button from '../components/Button';
import Spacing from '../components/Spacing';
import Text from '../components/Text';
import { scoreRegex } from '../utils/regex';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ScoreData } from '../recoil/scoreData';

const Home = () => {
  const navigate = useNavigate();

  const [scoreData, setScoreData] = useRecoilState(ScoreData);

  const handleSubmitScore = (event) => {
    event.preventDefault();

    const isScoreMissing = Object.values(scoreData).some(
      (score) => score === ''
    );
    if (isScoreMissing) {
      alert('You must fill all the score!');
      return;
    }

    navigate('/chart');
  };

  const handleChangeScoreInput = (studentName) => (event) => {
    const isValid = scoreRegex.test(event.target.value);

    if (isValid) {
      setScoreData((prevData) => ({
        ...prevData,
        [studentName]: event.target.value,
      }));
    } else {
      alert('Not a valid input!');
    }
  };

  const handleResetBtnClick = () => {
    setScoreData((prevData) => {
      const newData = {};
      Object.keys(prevData).forEach((studentName) => {
        newData[studentName] = '';
      });
      return newData;
    });
  };

  const studentCol = Object.keys(scoreData).map((studentName) => (
    <ColumnValueBox key={studentName}>
      <Text fontSize="30">{studentName}</Text>
    </ColumnValueBox>
  ));

  const scoreCol = Object.keys(scoreData).map((studentName) => (
    <ColumnValueBox key={studentName}>
      <ScoreInput
        value={scoreData[studentName]}
        placeholder="fill in the score"
        onChange={handleChangeScoreInput(studentName)}
      />
    </ColumnValueBox>
  ));

  return (
    <ScoreForm onSubmit={handleSubmitScore}>
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
        <Button
          text="Make Chart"
          fontSize={25}
          width={170}
          height={60}
          type="submit"
        />
        <Button
          text="Reset Data"
          fontSize={25}
          width={170}
          height={60}
          type="button"
          onClick={handleResetBtnClick}
        />
      </BottomBtnBox>
    </ScoreForm>
  );
};

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

const ScoreForm = styled.form`
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

const BottomBtnBox = styled.div`
  display: flex;
  gap: 100px;
`;

export default Home;
