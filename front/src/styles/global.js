import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
      --primary: #660066;
      --grey: #566676;
      --grey-dark: #2B333B;
      --white: #FFFFFF;
      --red: #c53030;
      --primary-shade: #4C004D;
      --branding-first: #330033;
      --branding-second: #4C004D;
      --branding-third: #660066;
      --branding-forth: #7F0080;
      --branding-fifth: #BF40BF;
      --branding-sixth: #D98CD9;
      --branding-seventh: #E5B3E6;
      --input-text: #566676;
      --input-placeholder: #7C8B99;
      --background-grey: #F0F2F4;
      --icon-color: #566676;
  }

  body {
    background: #f5f5f5;
    color:var(--primary);
    -webkit-font-smoothing:antialiased;
  }

  body, input, button  {
    font-family:'Ubuntu',serif;
    font-size: 1rem;
  }

  h1 {
    color: var(--grey-dark);
    font-weight: 500;
    font-size: 2.5rem; //40px
    line-height: 2.87rem;
  }

  h3 {
     color: var(--grey);
     font-weight: 400;
     font-size: 1.25rem;
     line-height: 1.5rem;
  }

  button {
    cursor:pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  .button-form {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button-text {
    padding: 16px 24px;
  }

  .button-icon {
    display: flex;
    padding: 16px 16px;
    background: #41c900;
    border-radius: 0 8px 8px 0;

  }


`;
