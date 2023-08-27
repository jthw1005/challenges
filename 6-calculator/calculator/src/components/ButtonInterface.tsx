import Row from './common/Row';
// import Button from './common/Button';
import Col from './common/Col';
import useCalculatorHistory from '../store/useCalculatorHistory';
import CalculatorBtn from './CalculatorButton';

const ButtonInterface = () => {
  const {
    addOperator,
    addNum,
    clear,
    toggleSign,
    toggleDecimalPoint,
    getResult,
    toggleMode,
  } = useCalculatorHistory();

  return (
    <Col>
      <Row>
        <CalculatorBtn
          text="C"
          onClick={() => {
            clear();
          }}
        />
        <CalculatorBtn
          text="+/-"
          onClick={() => {
            toggleSign();
          }}
        />
        <CalculatorBtn
          text="%"
          onClick={() => {
            addOperator('%');
          }}
        />
        <CalculatorBtn
          text="÷"
          backgroundColor="orange"
          onClick={() => {
            addOperator('÷');
          }}
        />
      </Row>
      <Row>
        <CalculatorBtn
          text="7"
          onClick={() => {
            addNum(7);
          }}
        />
        <CalculatorBtn
          text="8"
          onClick={() => {
            addNum(8);
          }}
        />
        <CalculatorBtn
          text="9"
          onClick={() => {
            addNum(9);
          }}
        />
        <CalculatorBtn
          text="x"
          backgroundColor="orange"
          onClick={() => {
            addOperator('x');
          }}
        />
      </Row>
      <Row>
        <CalculatorBtn
          text="4"
          onClick={() => {
            addNum(4);
          }}
        />
        <CalculatorBtn
          text="5"
          onClick={() => {
            addNum(5);
          }}
        />
        <CalculatorBtn
          text="6"
          onClick={() => {
            addNum(6);
          }}
        />
        <CalculatorBtn
          text="-"
          backgroundColor="orange"
          onClick={() => {
            addOperator('-');
          }}
        />
      </Row>
      <Row>
        <CalculatorBtn
          text="1"
          onClick={() => {
            addNum(1);
          }}
        />
        <CalculatorBtn
          text="2"
          onClick={() => {
            addNum(2);
          }}
        />
        <CalculatorBtn
          text="3"
          onClick={() => {
            addNum(3);
          }}
        />
        <CalculatorBtn
          text="+"
          backgroundColor="orange"
          onClick={() => {
            addOperator('+');
          }}
        />
      </Row>
      <Row>
        <CalculatorBtn
          text="M"
          onClick={() => {
            toggleMode();
          }}
        />
        <CalculatorBtn
          text="0"
          onClick={() => {
            addNum(0);
          }}
        />
        <CalculatorBtn
          text="."
          onClick={() => {
            toggleDecimalPoint();
          }}
        />
        <CalculatorBtn
          text="="
          backgroundColor="orange"
          onClick={() => {
            getResult();
          }}
        />
      </Row>
    </Col>
  );
};

export default ButtonInterface;
