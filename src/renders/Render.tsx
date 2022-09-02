import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import style from '../globals/style';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${style.typography.fontFamily};
    font-weight: 400; 
  }
`;

const Render = (id: string, component: JSX.Element) => {
  if (!id) {
    return;
  }

  let elem = document.getElementById('__VIT_PLUGIN__' + id);

  if (elem) {
    elem.remove();
  }

  elem = document.createElement("div");
  elem.id = '__VIT_PLUGIN__' + id;
  document.body.appendChild(elem);

  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      {component}
    </React.StrictMode>
  );
}

export default Render;
