import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button, Link, Icon } from './style';

interface iWhatsappButton {
  number: string,
  text?: string
}

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
      <Button>
        <Link href={link} target="_blank" rel="noreferrer">
          <Icon>
            <FontAwesomeIcon icon={faWhatsapp} />
          </Icon>
        </Link>
      </Button>
    );
  }
}

export default WhatsappButton;
