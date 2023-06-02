import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    min-height: 100vh;
    background-image: linear-gradient(180deg, #645CBB, #A084DC, #BFACE2);
`;

export default Global;