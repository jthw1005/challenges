import { styled } from 'styled-components';
import Text from './common/Text';
import Col from './common/Col';
import useCalculatorHistory from '../store/useCalculatorHistory';
import { useEffect, useRef } from 'react';

const Display = () => {
  const { history, currentExpression, mode, handleInputChange, getResult } =
    useCalculatorHistory((state) => {
      return {
        history: state.history,
        currentExpression: state.currentExpression,
        mode: state.mode,
        handleInputChange: state.handleInputChange,
        getResult: state.getResult,
      };
    });

  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentExpressionBox = boxRef.current;
    if (currentExpressionBox) {
      currentExpressionBox.scrollLeft = currentExpressionBox.scrollWidth;
    }
  }, [currentExpression]);

  return (
    <DisplayBox>
      <HistoryBox alignItems="start" justifyCenter="start" gap={10}>
        {history.map((v, i) => (
          <Text key={i + v} content={v} color="#bbb" fontSize={10} />
        ))}
      </HistoryBox>
      <CurrExpressionBox ref={boxRef}>
        {mode === 'btn' ? (
          <Text content={currentExpression} color="#fff" fontSize={20} />
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              getResult();
            }}
          >
            <ExpressionInput
              value={currentExpression}
              onChange={handleInputChange}
            />
          </form>
        )}
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
  height: 75%;
  overflow-y: scroll;
  padding-bottom: 10px;
`;

const CurrExpressionBox = styled.div`
  height: 25%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const ExpressionInput = styled.input`
  width: 100%;
  border: none;
  color: #fff;
  background-color: transparent;
  border-bottom: 1px solid orange;
  &:focus {
    outline: none;
  }
`;

export default Display;
