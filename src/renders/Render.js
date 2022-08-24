import React from 'react';
import ReactDOM from 'react-dom/client';

const Render = (elem, component) => {
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      {component}
    </React.StrictMode>
  );
}

export default Render;
