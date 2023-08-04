import { atom } from 'recoil';

const Hour = atom<string>({
  key: 'hour',
  default: '00',
});

const Minute = atom<string>({
  key: 'minute',
  default: '00',
});

const Second = atom<number>({
  key: 'second',
  default: 1,
});

export { Hour, Minute, Second };
