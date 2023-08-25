import { Formula } from '../store/useCalculatorHistory';
import removeWhitespace from './removeWhiteSpace';

function calculate(expr: Formula): string {
  const newExpr = removeWhitespace(expr) + ';';
  let temp = '';
  let operator = '';
  const stack: number[] = [];

  for (let i = 0; i < newExpr.length; i++) {
    if (!isNaN(+newExpr[i]) || newExpr[i] === '.') {
      temp = temp + newExpr[i];
    } else if (expr[i] === '(') {
      temp = temp + '-';
      i++;
    } else if (expr[i] === ')') {
      continue;
    } else {
      if (operator === '') {
        stack.push(+temp);
      } else if (operator === '+') {
        stack.push(+temp);
      } else if (operator === '-') {
        stack.push(-temp);
      } else if (operator === 'x') {
        stack.push((stack.pop() as number) * +temp);
      } else if (operator === '÷') {
        stack.push(+((stack.pop() as number) / +temp).toFixed(2));
      } else if (operator === '%') {
        stack.push((stack.pop() as number) % +temp);
      }
      operator = newExpr[i];
      temp = '';
    }
  }

  const result = stack.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  return result;
}

export default calculate;
