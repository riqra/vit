import FreeShippingProgressBarInSnackbar from '../components/custom/ProgressBarInSnackbar';
import { iFreeShippingProgressBarInSnackbar } from '../components/custom/ProgressBarInSnackbar/contracts';
import Render from './Render';

const FreeShippingProgressBarInSnackbarRender = (props: iFreeShippingProgressBarInSnackbar) => {
  Render(props.id, <FreeShippingProgressBarInSnackbar {...props} />);
}

export default FreeShippingProgressBarInSnackbarRender;
