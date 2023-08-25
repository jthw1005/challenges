import { create } from 'zustand';
import { extractNumber } from '../utils/extractNumber';
import { dotRegex } from '../utils/regex';
import calculate from '../utils/calculate';
import isLastInputOperator from '../utils/isLastInputOperator';

export type Formula = string;
export type Operator = '+' | '-' | 'x' | '÷' | '%';

interface CaculatorHistory {
  history: Formula[];
  currentExpression: Formula;
  addOperator: (operator: Operator) => void;
  addNum: (num: number) => void;
  clear: () => void;
  toggleSign: () => void;
  toggleDecimalPoint: () => void;
  getResult: () => void;
}

const useCalculatorHistory = create<CaculatorHistory>((set) => ({
  history: [],
  currentExpression: '0',

  addOperator: (operator: Operator) =>
    set(({ currentExpression }) => {
      if (isLastInputOperator(currentExpression)) {
        return {
          currentExpression: currentExpression.slice(0, -3) + ` ${operator} `,
        };
      }
      return {
        currentExpression: currentExpression + ` ${operator} `,
      };
    }),

  addNum: (num: number) =>
    set(({ currentExpression }) => ({
      currentExpression:
        currentExpression === '0' ? String(num) : currentExpression + num,
    })),

  clear: () =>
    set(() => ({
      currentExpression: '0',
      history: [],
    })),

  toggleSign: () =>
    set(({ currentExpression }) => {
      const tempArr = currentExpression.split(' ');
      const lastEl = tempArr[tempArr.length - 1];
      tempArr[tempArr.length - 1] = isNaN(+lastEl)
        ? String(extractNumber(lastEl))
        : `(-${lastEl})`;
      return { currentExpression: tempArr.join(' ') };
    }),

  toggleDecimalPoint: () =>
    set(({ currentExpression }) => {
      const tempArr = currentExpression.split(' ');
      const lastEl = tempArr[tempArr.length - 1];
      if (dotRegex.test(lastEl)) {
        if (lastEl[lastEl.length - 1] === '.') {
          tempArr[tempArr.length - 1] = lastEl.slice(0, -1);
          return { currentExpression: tempArr.join(' ') };
        } else {
          return {};
        }
      } else {
        return { currentExpression: currentExpression + '.' };
      }
    }),

  getResult: () =>
    set((state) => {
      const result = calculate(state.currentExpression);
      if (
        isLastInputOperator(state.currentExpression) ||
        isNaN(result) ||
        result === Infinity
      ) {
        alert('not a vaild input');
        return {};
      }
      return {
        history: [...state.history, `${state.currentExpression} = ${result}`],
        currentExpression: '0',
      };
    }),
}));

export default useCalculatorHistory;
