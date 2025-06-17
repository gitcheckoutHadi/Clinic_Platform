import { atom } from 'recoil';

export const themeState = atom({
    key: 'themeState',
    default: localStorage.getItem('theme') || 'light',

});

export const languageState = atom({
    key: 'languageState',
    default: localStorage.getItem('language') || 'en',
});