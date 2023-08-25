import Row from './common/Row';
import Button from './common/Button';
import Col from './common/Col';
import useCalculatorHistory from '../store/useCalculatorHistory';

const ButtonInterface = () => {
  const {
    addPlus,
    addMinus,
    addMultiplication,
    addDivision,
    addMod,
    addNum,
    clear,
    toggleSign,
    toggleDecimalPoint,
    getResult,
  } = useCalculatorHistory();

  return (
    <Col>
      <Row>
        <Button
          text="C"
          onClick={() => {
            clear();
          }}
        />
        <Button
          text="+/-"
          onClick={() => {
            toggleSign();
          }}
        />
        <Button
          text="%"
          onClick={() => {
            addMod();
          }}
        />
        <Button
          text="÷"
          backgroundColor="orange"
          onClick={() => {
            addDivision();
          }}
        />
      </Row>
      <Row>
        <Button
          text="7"
          onClick={() => {
            addNum(7);
          }}
        />
        <Button
          text="8"
          onClick={() => {
            addNum(8);
          }}
        />
        <Button
          text="9"
          onClick={() => {
            addNum(9);
          }}
        />
        <Button
          text="x"
          backgroundColor="orange"
          onClick={() => {
            addMultiplication();
          }}
        />
      </Row>
      <Row>
        <Button
          text="4"
          onClick={() => {
            addNum(4);
          }}
        />
        <Button
          text="5"
          onClick={() => {
            addNum(5);
          }}
        />
        <Button
          text="6"
          onClick={() => {
            addNum(6);
          }}
        />
        <Button
          text="-"
          backgroundColor="orange"
          onClick={() => {
            addMinus();
          }}
        />
      </Row>
      <Row>
        <Button
          text="1"
          onClick={() => {
            addNum(1);
          }}
        />
        <Button
          text="2"
          onClick={() => {
            addNum(2);
          }}
        />
        <Button
          text="3"
          onClick={() => {
            addNum(3);
          }}
        />
        <Button
          text="+"
          backgroundColor="orange"
          onClick={() => {
            addPlus();
          }}
        />
      </Row>
      <Row>
        <Button
          text="M"
          onClick={() => {
            console.log('change input mode');
          }}
        />
        <Button
          text="0"
          onClick={() => {
            addNum(0);
          }}
        />
        <Button
          text="."
          onClick={() => {
            toggleDecimalPoint();
          }}
        />
        <Button
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
