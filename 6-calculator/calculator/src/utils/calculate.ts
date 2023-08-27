import { Formula } from '../store/useCalculatorHistory';

type Token = string | number;

function calculate(expr: Formula): number {
  const operators: string[] = ['+', '-', '*', '/', '%'];

  // 0. 연산자 치환
  const replaceOperator = (expr: Formula): Formula => {
    const tempArr = expr.split('');
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === 'x') {
        tempArr[i] = '*';
      } else if (tempArr[i] === '÷') {
        tempArr[i] = '/';
      }
    }
    return tempArr.join('');
  };

  // 1. 중괄호, 대괄호 치환
  function replaceBrackets(str: string) {
    return str.replace(/[{\[]/g, '(').replace(/[}\]]/g, ')');
  }

  // 2. 토큰화
  const tokenize = (expr: Formula): Token[] => {
    const tokens: Token[] = [];
    let num = '';
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === ' ') continue;

      if (operators.includes(expr[i]) || expr[i] === '(' || expr[i] === ')') {
        if (num) {
          tokens.push(Number(num));
          num = '';
        }
        tokens.push(expr[i]);
        if (expr[i] === '(' && expr[i + 1] === '-') {
          num = '-';
          i++;
        }
      } else if (expr[i] === '.') {
        if (i + 1 < expr.length && !isNaN(Number(expr[i + 1]))) {
          num += expr[i];
        }
      } else {
        num += expr[i];
      }
    }
    if (num) tokens.push(Number(num));
    return tokens;
  };

  // 3. 후위 표기법으로 변환
  const infixToPostfix = (tokens: Token[]): Token[] => {
    const output: Token[] = [];
    const opsStack: string[] = [];
    const precedence: { [key: string]: number } = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '%': 2,
    };

    for (const token of tokens) {
      if (typeof token === 'number') {
        output.push(token);
      } else if (token === '(') {
        opsStack.push(token);
      } else if (token === ')') {
        while (opsStack[opsStack.length - 1] !== '(') {
          output.push(opsStack.pop() as string);
        }
        opsStack.pop();
      } else if (typeof token === 'string') {
        while (
          opsStack.length &&
          precedence[opsStack[opsStack.length - 1]] >= precedence[token]
        ) {
          output.push(opsStack.pop() as string);
        }
        opsStack.push(token);
      }
    }
    while (opsStack.length) {
      output.push(opsStack.pop() as string);
    }

    return output;
  };

  // 4. 계산
  const computePostfix = (postfixTokens: Token[]): number => {
    const values: number[] = [];

    for (const token of postfixTokens) {
      if (typeof token === 'number') {
        values.push(token);
      } else if (typeof token === 'string') {
        const b = values.pop()!;
        const a = values.pop()!;
        switch (token) {
          case '+':
            values.push(a + b);
            break;
          case '-':
            values.push(a - b);
            break;
          case '*':
            values.push(a * b);
            break;
          case '/':
            values.push(a / b);
            break;
          case '%':
            values.push(a % b);
            break;
        }
      }
    }
    return values[0];
  };

  // 5. 소수점 둘 째 자리 반올림
  const roundToTwoDecimals = (num: number): number => {
    return Math.round(num * 100) / 100;
  };

  const newExpr = replaceBrackets(replaceOperator(expr));
  const tokens = tokenize(newExpr);
  const postfixTokens = infixToPostfix(tokens);
  const calculatedResult = computePostfix(postfixTokens);

  return roundToTwoDecimals(calculatedResult);
}

export default calculate;
