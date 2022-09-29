import React from 'react';
import ReactDOM from 'react-dom/client';
import style from '../globals/style';
import environment from '../utils/environment';

const render = (id: string, component: JSX.Element) => {
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

  if (!environment.isProduction) {
    elem.style.fontFamily = `${style.typography.fontFamily}`
  }

  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      {component}
    </React.StrictMode>
  );
}

export default render;
