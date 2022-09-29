import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Container } from './styles';
import { iWhatsappButton } from './contracts';
import style from '../../../globals/style';
import Icon from '../../_atoms/Icon';
import FloatingActionButton from '../../_molecules/FloatingActionButton';
import template from '../../../globals/template';

const WhatsappButton = ({
  number = '51987654321',
  text = ''
}: iWhatsappButton) => {

  const link = template.whatsappUrl(number, encodeURIComponent(text));

  return (
    <Container>
      <FloatingActionButton href={link} color={style.palette.custom.whatsapp}>
        <Icon icon={faWhatsapp} fontSize={style.spacing.s32} color={style.palette.grayscale.white} />
      </FloatingActionButton>
    </Container>
  )
}

export default WhatsappButton;
