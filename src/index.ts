import reportWebVitals from './reportWebVitals';
import WhatsappButtonRender from './renders/WhatsappButtonRender';
import ModalForImagesRender from './renders/ModalForImagesRender';
import FreeShippingProgressBarInSnackbarRender from './renders/FreeShippingProgressBarInSnackbarRender';

export {
  WhatsappButtonRender as whatsappButton,
  ModalForImagesRender as modalForImages,
  FreeShippingProgressBarInSnackbarRender as freeShippingProgressBarInSnackbar
};

// https://es.reactjs.org/docs/jsx-in-depth.html

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
