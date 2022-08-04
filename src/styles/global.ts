import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
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
