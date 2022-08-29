import WhatsappButton, { iWhatsappButton } from "../components/WhatsappButton";
import Render from './Render';

const WhatsappButtonRender = (params: iWhatsappButton) => {
  if (!params.id) {
    return;
  }

  Render(
    params.id,
    <WhatsappButton id={params.id} number={params.number} text={params.text} />
  )
}

export default WhatsappButtonRender;
