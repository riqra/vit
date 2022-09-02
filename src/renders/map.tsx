import ModalForImages from "../components/custom/ModalForImages";
import { iModalForImages } from "../components/custom/ModalForImages/contracts";
import FreeShippingProgressBarInSnackbar from "../components/custom/FreeShippingProgressBarInSnackbar";
import { iFreeShippingProgressBarInSnackbar } from "../components/custom/FreeShippingProgressBarInSnackbar/contracts";
import WhatsappButton from "../components/custom/WhatsappButton";
import { iWhatsappButton } from "../components/custom/WhatsappButton/contracts";
import render from "./render";

const whatsappButton = (props: iWhatsappButton) => render(props.id, <WhatsappButton {...props} />);

const modalForImages = (props: iModalForImages) => render(props.id, <ModalForImages {...props} />);

const freeShippingProgressBarInSnackbar = (props: iFreeShippingProgressBarInSnackbar) =>
  render(props.id, <FreeShippingProgressBarInSnackbar {...props} />);

export {
  whatsappButton,
  modalForImages,
  freeShippingProgressBarInSnackbar
}
