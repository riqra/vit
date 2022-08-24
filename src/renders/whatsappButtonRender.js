import React from 'react';
import ReactDOM from 'react-dom/client';
import WhatsappButton from "../components/WhatsappButton";

const whatsappButtonRender = (id) => {
  const elem = document.getElementById(id);
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      <WhatsappButton number={elem.dataset.number} text={elem.dataset.text} />
    </React.StrictMode>
  );
}

export default whatsappButtonRender;
