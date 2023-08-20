import { atom } from 'recoil';

export const ScoreData = atom({
  key: 'scoreData',
  default: {
    Alex: '',
    Tom: '',
    Ryan: '',
    Don: '',
    Emma: '',
  },
});
