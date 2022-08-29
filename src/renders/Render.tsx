import React from 'react';
import ReactDOM from 'react-dom/client';

const Render = (id: string, component: JSX.Element) => {
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
      {component}
    </React.StrictMode>
  );
}

export default Render;
