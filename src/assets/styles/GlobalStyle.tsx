import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body {
  background-color: var(--base-color);
  color: #fff;
  width: 100vw;
  min-height: 100vh;
}

:root{
  --base-color: #202221;
  --contrast-base: #303531;
  --letter-color: #4D574E;
  --details-color: #956E2F;
  --hover-color: #654922;
}
`;

export { GlobalStyle };