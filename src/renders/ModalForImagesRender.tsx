import ModalForImages from "../components/custom/ModalForImages";
import { iModalForImages } from "../components/custom/ModalForImages/contracts";
import Render from './Render';

const ModalForImagesRender = (props: iModalForImages) => {
  Render(props.id, <ModalForImages {...props} />);
}

export default ModalForImagesRender;
