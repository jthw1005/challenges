import { styled } from 'styled-components';
import Text from './common/Text';
import Col from './common/Col';
import useCalculatorHistory from '../store/useCalculatorHistory';

const Display = () => {
  const { history, currentExpression } = useCalculatorHistory((state) => {
    return {
      history: state.history,
      currentExpression: state.currentExpression,
    };
  });

  return (
    <DisplayBox>
      <HistoryBox alignItems="start" justifyCenter="start" gap={10}>
        {history.map((v, i) => (
          <Text key={i + v} content={v} color="#bbb" fontSize={10} />
        ))}
      </HistoryBox>
      <CurrExpressionBox>
        <Text content={currentExpression} color="#fff" fontSize={20} />
      </CurrExpressionBox>
    </DisplayBox>
  );
};

const DisplayBox = styled.div`
  height: 100px;
  background-color: #555;
  padding: 10px;
`;

const HistoryBox = styled(Col)`
  height: 80%;
  overflow-y: scroll;
  padding-bottom: 10px;
`;

const CurrExpressionBox = styled.div`
  height: 20%;
`;

export default Display;
