import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button, Link, Icon } from './styles';
import { iWhatsappButton } from './contracts';

const WhatsappButton = ({
  number = '51987654321',
  text
}: iWhatsappButton) => {
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
  )
}

export default WhatsappButton;
