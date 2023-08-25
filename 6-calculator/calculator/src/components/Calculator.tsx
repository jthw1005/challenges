import { styled } from 'styled-components';
import ButtonInterface from './ButtonInterface';
import Display from './Display';

const Calculator = () => {
  return (
    <CalculatorBox>
      <Display />
      <ButtonInterface />
    </CalculatorBox>
  );
};

const CalculatorBox = styled.div`
  width: 200px;
`;

export default Calculator;
