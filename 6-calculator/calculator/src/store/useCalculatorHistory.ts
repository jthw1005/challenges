import { create } from 'zustand';
import { extractNumber } from '../utils/extractNumber';
import { dotRegex } from '../utils/regex';
import calculate from '../utils/calculate';

export type Formula = string;

interface CaculatorHistory {
  history: Formula[];
  currentExpression: Formula;
}

const useCalculatorHistory = create<CaculatorHistory>((set) => ({
  history: [],
  currentExpression: '0',
  // operators
  addPlus: () =>
    set(({ currentExpression }) => ({
      currentExpression: currentExpression + ' + ',
    })),
  addMinus: () =>
    set(({ currentExpression }) => ({
      currentExpression: currentExpression + ' - ',
    })),
  addMultiplication: () =>
    set(({ currentExpression }) => ({
      currentExpression: currentExpression + ' x ',
    })),
  addDivision: () =>
    set(({ currentExpression }) => ({
      currentExpression: currentExpression + ' ÷ ',
    })),
  addMod: () =>
    set(({ currentExpression }) => ({
      currentExpression: currentExpression + ' % ',
    })),

  // etc.
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
          return { currentExpression };
        }
      } else {
        return { currentExpression: currentExpression + '.' };
      }
    }),
  getResult: () =>
    set((state) => ({
      history: [
        ...state.history,
        `${state.currentExpression} = ${calculate(state.currentExpression)}`,
      ],
      currentExpression: '0',
    })),
}));

export default useCalculatorHistory;
