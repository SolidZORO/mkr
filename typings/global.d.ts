// @ts-ignore
declare global {
  interface Window {
    NoCaptcha: any;
  }
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare const __DEV__: boolean;

declare module 'colorthief/*';
