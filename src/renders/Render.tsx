import React from 'react';
import ReactDOM from 'react-dom/client';

const Render = (elem: HTMLElement, component: JSX.Element) => {
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      {component}
    </React.StrictMode>
  );
}

export default Render;
