import WhatsappButton from "../components/WhatsappButton";
import Render from './Render';

const WhatsappButtonRender = (id: string) => {
  const elem = document.getElementById(id);
  Render(
    elem!,
    <WhatsappButton number={elem!.dataset.number!} text={elem!.dataset.text} />
  );
}

export default WhatsappButtonRender;
