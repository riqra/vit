import ModalForImages from "../components/exportable/ModalForImages";
import { iModalForImages } from "../components/exportable/ModalForImages/contracts";
import FreeShippingProgressBarInSnackbar from "../components/exportable/FreeShippingProgressBarInSnackbar";
import { iFreeShippingProgressBarInSnackbar } from "../components/exportable/FreeShippingProgressBarInSnackbar/contracts";
import WhatsappButton from "../components/exportable/WhatsappButton";
import { iWhatsappButton } from "../components/exportable/WhatsappButton/contracts";
import render from "./render";

const whatsappButton = (props: iWhatsappButton) => render(props.id, <WhatsappButton {...props} />);

const modalForImages = (props: iModalForImages) => render(props.id, <ModalForImages {...props} />);

// eslint-disable-next-line
const freeShippingProgressBarInSnackbar = (props: iFreeShippingProgressBarInSnackbar) =>
  render(props.id, <FreeShippingProgressBarInSnackbar {...props} />);

export {
  whatsappButton,
  modalForImages,
  //freeShippingProgressBarInSnackbar
}
