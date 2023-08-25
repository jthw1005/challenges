import { Formula } from '../store/useCalculatorHistory';
import { operatorRegex } from '../utils/regex';
import removeWhitespace from '../utils/removeWhiteSpace';

function isLastInputOperator(expr: Formula) {
  const trimmendExpression = removeWhitespace(expr);
  const isOperator = operatorRegex.test(
    trimmendExpression[trimmendExpression.length - 1]
  );
  return isOperator;
}

export default isLastInputOperator;
