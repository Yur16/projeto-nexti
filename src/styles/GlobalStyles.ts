import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-white);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #0C3A8B;
    --color-secondary: #FFC501;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-header: #FFF;
    --color-footer: #ebebeb;
    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;
  }
`;
