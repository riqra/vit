import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsappButton = function () {
  return (
    <div id="vit-whatsapp-button" className='vit-whatsapp-button'>
      <a href="#/" className='vit-whatsapp-button__link' target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className='vit-whatsapp-button__icon' />
      </a>
    </div>
  );
}

export default WhatsappButton;
