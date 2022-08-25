import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import iWhatsappButton from '../../contracts/iWhatsappButton';


class WhatsappButton extends React.Component<iWhatsappButton> {
  render() {
    const { number, text } = this.props;

    if (!number) {
      return;
    }

    let link = "https://wa.me/" + number;

    if (text) {
      link += '?text=' + text;
    }

    return (
      <div id="vit-whatsapp-button" className='vit-whatsapp-button'>
        <a href={link} className='vit-whatsapp-button__link' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className='vit-whatsapp-button__icon' />
        </a>
      </div>
    );
  }
}

export default WhatsappButton;