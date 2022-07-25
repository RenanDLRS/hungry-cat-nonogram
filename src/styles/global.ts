import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #FAFAFA;
    --main-color: #31575B;
    --secondary-color: #197D67;
    --description-primary-color: #969696;
    --description-secondary-color: #707070;
    --links-color: #1492E6;
    --border-main-color: #D5D5D5;
  
    /* 1rem = 10px*/
    font-size: 62.5%;
    /* font-size: 60%; */
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background-color: var(--background-color);
    font-size: 1.4rem;
  }

  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
    border: 0;
    color: var(--color-text-in-second);
  }

  button:focus {
    outline: none;
  }

  input, textarea, select {
    background: transparent;
    border: 1px solid var(--border-main-color);
    border-radius: 6px;
    padding: 5px 12px;
    color: var(--color-input-text);
  }

  input, textarea, select:focus {
    outline: none;
  }

  select {
    border: 1px solid #A0A0A0;
    color: #ACACAC;
    padding: 1.2rem;
  }
  

  a {
    text-decoration: none;
    margin-left: 1.3rem;
    color: #1492E6;
    font-size: 1.3rem;
  }

  h1 {
    font-size: 2.6rem;
    color: var(--color-title-in-primary);
  }

  .input-error {
    border-color: #d9534f !important;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }


  #root {
    height: 100%;
    width: 100%;
  }
`;
