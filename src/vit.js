import React from 'react';
import ReactDOM from 'react-dom/client';

import WhatsappButton from "./components/WhatsappButton";

const renderWhatsappButton = (divId) => {
  const root = ReactDOM.createRoot(document.getElementById(divId));
  root.render(
    <React.StrictMode>
      <WhatsappButton number={98765431} />
    </React.StrictMode>
  );
  /*
  var elem = document.getElementById(divId);
  return (<WhatsappButton number={98765431} />);
  */
}

var vitWhatsappButton = function (divId) {
  // inject button
  var elem = document.getElementById(divId);
  var clone = document.getElementById("vit-whatsapp-button").cloneNode(true);
  clone.removeAttribute('id');
  elem.appendChild(clone);

  var link = elem.dataset.number ? "https://wa.me/" + elem.dataset.number + "?text=" + elem.dataset.text : '#';
  elem.getElementsByClassName('vit-whatsapp-button__link')[0].href = link;

  var _whatsappButton = elem.getElementsByClassName('vit-whatsapp-button')[0];
  _whatsappButton.style.display = 'block';
}

const vit = {};
vit.renderWhatsappButton = renderWhatsappButton;

export default vit;
