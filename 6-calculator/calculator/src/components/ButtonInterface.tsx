import Row from './common/Row';
import Button from './common/Button';
import Col from './common/Col';

const ButtonInterface = () => {
  return (
    <Col>
      <Row>
        <Button text="C" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="÷" backgroundColor="orange" />
      </Row>
      <Row>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" backgroundColor="orange" />
      </Row>
      <Row>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" backgroundColor="orange" />
      </Row>
      <Row>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" backgroundColor="orange" />
      </Row>
      <Row>
        <Button text="M" />
        <Button text="0" />
        <Button text="." />
        <Button text="=" backgroundColor="orange" />
      </Row>
    </Col>
  );
};

export default ButtonInterface;
