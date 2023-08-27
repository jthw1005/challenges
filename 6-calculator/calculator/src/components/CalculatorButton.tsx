import useCalculatorHistory from '../store/useCalculatorHistory';
import Button, { ColorCode } from './common/Button';

interface CalculatorBtnProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: ColorCode;
}

const CalculatorBtn = (props: CalculatorBtnProps) => {
  const { text, onClick, backgroundColor } = props;

  const { mode } = useCalculatorHistory((state) => {
    return { mode: state.mode };
  });

  return (
    <Button
      text={text}
      onClick={onClick}
      disabled={mode === 'typing' && text !== 'M' && text !== 'C'}
      backgroundColor={backgroundColor}
    />
  );
};

export default CalculatorBtn;
