import { atom } from "recoil";

export const scrollArrowOnOffState = atom({
  key: 'scrollIntoViewOnOffState',
  default: false,
});

export const scrollContactOnOffState = atom({
  key: 'scrollContactOnOffState',
  default: false,
});

export const linkNameState = atom({
  key: 'linkNameState',
  default: '',
});

