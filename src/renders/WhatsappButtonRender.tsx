import WhatsappButton from "../components/custom/WhatsappButton";
import { iWhatsappButton } from "../components/custom/WhatsappButton/contracts";
import Render from './Render';

const WhatsappButtonRender = (props: iWhatsappButton) => {
  Render(props.id, <WhatsappButton {...props} />)
}

export default WhatsappButtonRender;
