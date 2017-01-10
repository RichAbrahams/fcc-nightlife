import { injectGlobal } from 'styled-components';

// rgb(44,62,80);
// rgb(231,76,60);
// rgb(236,240,241);
// rgb(52,152,219);
// rgb(41,128,185);
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: rgb(236,240,241);
    color: white;
  }

  body.fontLoaded {
    font-family: 'Anton', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: 'Lobster', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  span,
  li {
    font-family: 'Anton', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
