import { styled } from 'styled-components';
import Text from './common/Text';
import Col from './common/Col';

const Display = () => {
  return (
    <DisplayBox>
      <HistoryBox alignItems="start" justifyCenter="start" gap={10}>
        <Text
          content="1 + 3 - 100000 + 100000 + 10 = 14"
          color="#bbb"
          fontSize={10}
        />
        <Text content="10 - 2 = 10" color="#bbb" fontSize={10} />
        <Text content="10 - 2 = 10" color="#bbb" fontSize={10} />
        <Text content="10 - 2 = 10" color="#bbb" fontSize={10} />
        <Text content="10 - 2 = 10" color="#bbb" fontSize={10} />
        <Text content="10 - 2 = 10" color="#bbb" fontSize={10} />
      </HistoryBox>
      <CurrExpressionBox>
        <Text content="3 x 2 - 10 % 3" color="#fff" fontSize={15} />
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
