import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Square:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nanum Square', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nanum Square', sans-serif;
  }

  p, a, button {
    font-family: 'Nanum Square', sans-serif;
  }
`;

export default FontStyles;
