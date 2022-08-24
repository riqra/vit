import WhatsappButton from "../components/WhatsappButton";
import Render from './Render';

const whatsappButtonRender = (id) => {
  const elem = document.getElementById(id);
  Render(
    elem,
    <WhatsappButton number={elem.dataset.number} text={elem.dataset.text} />
  );
}

export default whatsappButtonRender;
