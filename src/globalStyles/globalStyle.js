import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-base-basic: #FFFFFF;
    --color-base-nutmeg-primary: #2fb153;
    --color-base-nutmeg-dark: #23843e;
    --color-base-greyscale-cod: #1b1b1b;
    --color-base-greyscale-slate: #2e2e2e;
    --color-base-greyscale-mineshaft: #454545;
    --color-base-greyscale-boulder: #757575;
    --color-base-greyscale-silver: #c9c9c9;
    --color-base-greyscale-mercury: #e6e6e6;
    --color-base-greyscale-wildsand: #f7f7f7;
    --color-base-error-light: #F67268;
    --font-base-family-light: 'GothamSSm-Light', sans-serif;
    --font-base-family-book: 'GothamSSm-Book', sans-serif;
    --font-base-family-medium: 'GothamSSm-Medium', sans-serif;
    --font-base-family-bold: 'GothamSSm-Bold', sans-serif;
    --breakpoints-devices-xxs: 320;
    --breakpoints-devices-xs: 480;
    --breakpoints-devices-sm: 568;
    --breakpoints-devices-md: 640;
    --breakpoints-devices-lg: 768;
    --breakpoints-devices-xl: 960;
    --breakpoints-devices-xxl: 1024;
    --size-font-small: 0.75rem; /* the small size of the font */
    --size-font-medium: 1rem; /* the medium size of the font */
    --size-font-large: 2rem; /* the large size of the font */
    --size-font-base: 1rem; /* the base size of the font */
    --size-forms-border-border-radius: 2px;
    --size-forms-input-input-height-l: 2rem;
    --size-spacing-m: 1rem;
    --size-typography-font-size-xl: 1.2rem;
    --size-typography-font-size-l: 1rem;
    --size-typography-font-size-m: 0.75rem;
    --size-typography-font-size-s: 0.7rem;
    --size-typography-line-height-m: 1.4rem;
    --size-typography-letter-spacing-xs: -0.05rem;
    --size-typography-font-weight-lite: 200rem;
  }
  .App {
    margin: 0;
  }
  html {
    color: var(--color-base-greyscale-cod);
    font-size: var(--size-font-medium);
    line-height: var(--size-typography-line-height-m);
  }
  h3 {
    font-family: var(----font-base-family-bold);
    color: var(--color-base-greyscale-cod);
    font-size: var(--size-font-large);
    line-height: var(--size-typography-line-height-m);
    letter-spacing: var(--size-typography-letter-spacing-xs);
  }
  h4 {
    font-family: var(----font-base-family-bold);
    font-size: var(--size-font-base);
    margin-bottom: 0;
  }
  p {
    font-size:  var(--size-font-small);
  }
  fieldset {
    border: 1px solid var(--color-base-greyscale-mercury);
    border-radius: var(--size-forms-border-border-radius);
    background-color: var(--color-base-basic);
    filter: drop-shadow(0.15em 0.15em 0.4em var(--color-base-greyscale-mercury));
  }
  form-group {
    text-align: left;
    position: relative;
  }
  legend, .hidden {
    display: none;
  }
  .visible {
    display: inline-block;
  }
  *:focus {
    outline: none;
  }
  .noscript {
    background-color: var(--color-base-error-light);
    color: var(--color-base-basic);
    font: inherit;
    font-family: var(--font-base-family-light);
    font-weight: var(--size-typography-font-weight-lite);
    padding: var(--size-spacing-m);
    text-align: center;
  }
`;

export default GlobalStyle;